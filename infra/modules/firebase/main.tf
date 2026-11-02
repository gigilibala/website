resource "google_firebase_project" "default" {
  provider = google-beta
  project  = var.project_id

  lifecycle {
    prevent_destroy = true
  }
}

# Projects created after 2026-10-15 get no default Hosting site on their own,
# and a deploy to a project with no site fails.
resource "google_firebase_hosting_site" "default" {
  provider = google-beta
  project  = var.project_id
  site_id  = var.project_id

  depends_on = [google_firebase_project.default]

  lifecycle {
    prevent_destroy = true
  }
}

resource "google_firebase_hosting_custom_domain" "default" {
  for_each = var.custom_domains

  provider              = google-beta
  project               = var.project_id
  site_id               = google_firebase_hosting_site.default.site_id
  custom_domain         = each.key
  redirect_target       = each.value.redirect_target
  wait_dns_verification = false
}
