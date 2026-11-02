output "workload_identity_provider" {
  value = module.iam.workload_identity_provider
}

output "github_actions_service_account" {
  value = module.iam.github_actions_service_account_email
}
