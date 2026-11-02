locals {
  project_id  = "aminhassani-prd"
  region      = "us-central1"
  budget_usd  = 5
  github_repo = "gigilibala/website"

  # Both hostnames serve the site directly; neither redirects to the other.
  custom_domains = {
    "www.aminhassani.com" = {}
    "aminhassani.com"     = {}
  }
}
