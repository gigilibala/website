# Website Infrastructure

Terraform for `aminhassani-prd`, the Google Cloud and Firebase project that hosts
the website. It lives in the cocomango.ai organization and shares its billing
account. This repo is public, so neither the organization ID nor the billing
account ID appears in it: no root takes them, and the budget reads the billing
account from the project.

## What's managed here

- `bootstrap/`: the first four APIs (Cloud Resource Manager, Service Usage, Cloud
  Billing, Cloud Storage) and the `aminhassani-prd-tfstate` state bucket.
- `envs/prd/`: the other APIs, Firebase, the Hosting site, the custom domains, the
  `github-actions` service account and its roles, the Workload Identity Federation
  pool and provider, `roles/owner` for `amin@cocomango.ai`, and a $5 monthly budget.
  The budget only sends alerts; it doesn't cap spending.

## What was set up by hand

These aren't in Terraform, so `terraform plan` won't show a change to them. A
rebuild has to redo them first:

- the project itself;
- its link to the billing account;
- `terraform-runner`'s `roles/owner` on the project;
- `terraform-runner`'s `roles/billing.costsManager` on the billing account.

If one of those grants is removed, the next apply fails with a 403, and only an
admin can restore it.

## Running Terraform

Both roots run from coco-vm as `amin`. No login is needed: Terraform acts as
`terraform-runner`, and neither root has secret inputs.

```sh
. /etc/profile.d/gcp-impersonate.sh
```

### `bootstrap`

Its state is in coco's private bucket, under the prefix `website-bootstrap`. It
can't go in the bucket this root creates, and it stays out of this public repo. The
root sets no `user_project_override`, so its calls are billed to
`terraform-runner`'s own project, which lets it enable Service Usage here.

```sh
terraform -chdir=infra/bootstrap init -backend-config=bucket=mybrain-tfstate-714130869753 -backend-config=prefix=website-bootstrap
terraform -chdir=infra/bootstrap apply
terraform -chdir=infra/bootstrap plan -detailed-exitcode
```

A newly enabled API can take a moment to start working, so a first apply on a fresh
project may need a second try.

### `envs/prd`

Its state is in `aminhassani-prd-tfstate`.

```sh
terraform -chdir=infra/envs/prd init
terraform -chdir=infra/envs/prd plan
terraform -chdir=infra/envs/prd apply
terraform -chdir=infra/envs/prd plan -detailed-exitcode
```

The WIF provider path and service account email are in both workflows as `env:`
values. They aren't secrets. They come from:

```sh
terraform -chdir=infra/envs/prd output -raw workload_identity_provider
terraform -chdir=infra/envs/prd output -raw github_actions_service_account
```

The WIF provider only accepts a token whose `repository`, `repository_id` and
`ref` claims are this repo, its numeric ID, and `refs/heads/main`, so a workflow
pushed to another branch can't deploy. Previews and the live deploy both still
work: `pull_request_target` runs with the base branch's ref, and the live deploy
runs on `main`. The ID is public and comes from
`gh api repos/gigilibala/website --jq .id`.

## Verification (no credentials)

```sh
terraform fmt -check -recursive infra/
terraform -chdir=infra/bootstrap init -backend=false && terraform -chdir=infra/bootstrap validate
terraform -chdir=infra/envs/prd init -backend=false && terraform -chdir=infra/envs/prd validate
```

## DNS swap

`www.aminhassani.com` and `aminhassani.com` still point at the old project,
`personal-website-c9eaf`. Merges deploy to `https://aminhassani-prd.web.app`, so
the domain keeps serving the old project's last release until this swap.

No document covers moving a domain between two Firebase projects, so this order
comes from the Hosting API reference and the custom domain guide. Ownership can take
up to 24 hours to transfer, and the site may show a certificate error or a 404
during that time.

The records come from the API, which is where these commands read them:

```sh
P=aminhassani-prd
H=(-H "Authorization: Bearer $(gcloud auth print-access-token)" -H "x-goog-user-project: $P")
curl -fsS "${H[@]}" https://firebasehosting.googleapis.com/v1beta1/projects/$P/sites/$P/customDomains \
  | jq '[.customDomains[]|{domain:(.name|split("/")|last),ownershipState,hostState,certState:.cert.state,dns:.requiredDnsUpdates.desired,acme:.cert.verification.dns.desired}]'
```

At Porkbun:

1. Add the `_acme-challenge` records (`acme` above), and wait for `certState` to
   reach `CERT_ACTIVE`.
2. Replace the TXT record `hosting-site=personal-website-c9eaf` with
   `hosting-site=aminhassani-prd`, and make any other change listed under `dns`. This
   TXT record has to stay in place permanently.
3. Leave the MX, SPF, DKIM, DMARC and `google-site-verification` records alone. An
   edit to the wrong apex TXT record can break `amin@aminhassani.com` mail.

Then run the command above until `ownershipState` is `OWNERSHIP_ACTIVE` and
`hostState` is `HOST_ACTIVE`, and check that the footer version on
`https://www.aminhassani.com` matches the one on `https://aminhassani-prd.web.app`.

To go back, restore the old TXT record.

Hosting may delete a custom domain that stays non-active for over 30 days. A
`terraform apply` recreates it, but read the records again afterwards, because the
ACME values can change.
