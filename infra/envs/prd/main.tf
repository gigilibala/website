module "services" {
  source = "../../modules/services"
}

module "firebase" {
  source         = "../../modules/firebase"
  project_id     = local.project_id
  custom_domains = local.custom_domains
  depends_on     = [module.services]
}

module "iam" {
  source      = "../../modules/iam"
  project_id  = local.project_id
  github_repo = local.github_repo
  depends_on  = [module.services]
}

module "budget" {
  source     = "../../modules/budget"
  project_id = local.project_id
  amount_usd = local.budget_usd
  depends_on = [module.services]
}
