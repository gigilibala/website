terraform {
  required_version = ">= 1.9.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 7.29"
    }
  }

  # This repo is public, so bootstrap state lives in coco's private bucket
  # instead of being committed. The bucket and prefix come from
  # -backend-config flags; see infra/README.md.
  backend "gcs" {}
}

# No user_project_override: API calls are billed to the caller's own project,
# so this root can enable Service Usage on a project that doesn't have it yet.
provider "google" {
  project = var.project_id
  region  = var.region
}
