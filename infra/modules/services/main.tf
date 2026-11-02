# infra/bootstrap owns the APIs this root needs before it can run.
locals {
  required_services = [
    "iam.googleapis.com",
    "iamcredentials.googleapis.com",
    "sts.googleapis.com",
    "firebase.googleapis.com",
    "firebasehosting.googleapis.com",
    "billingbudgets.googleapis.com",
  ]
}

resource "google_project_service" "required" {
  for_each = toset(local.required_services)

  service = each.value

  disable_on_destroy         = false
  disable_dependent_services = false
}
