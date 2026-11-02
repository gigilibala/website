terraform {
  required_version = ">= 1.9.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 7.29"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "~> 7.29"
    }
  }

  backend "gcs" {
    bucket = "aminhassani-prd-tfstate"
    prefix = "envs/prd"
  }
}

provider "google" {
  project               = local.project_id
  region                = local.region
  user_project_override = true
  billing_project       = local.project_id
}

provider "google-beta" {
  project               = local.project_id
  region                = local.region
  user_project_override = true
  billing_project       = local.project_id
}
