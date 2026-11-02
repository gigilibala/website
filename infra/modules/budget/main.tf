data "google_project" "current" {
  project_id = var.project_id
}

# Reads the billing account from the project so its ID stays out of this public repo.
resource "google_billing_budget" "monthly" {
  billing_account = data.google_project.current.billing_account
  display_name    = "${data.google_project.current.project_id} monthly budget"

  budget_filter {
    projects               = ["projects/${data.google_project.current.number}"]
    calendar_period        = "MONTH"
    credit_types_treatment = "INCLUDE_ALL_CREDITS"
  }

  amount {
    specified_amount {
      currency_code = "USD"
      units         = tostring(var.amount_usd)
    }
  }

  threshold_rules { threshold_percent = 0.5 }
  threshold_rules { threshold_percent = 0.9 }
  threshold_rules { threshold_percent = 1.0 }
}
