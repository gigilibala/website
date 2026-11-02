variable "project_id" {
  type = string
}

variable "github_repo" {
  type        = string
  description = "owner/repo that may assume the deploy SA via WIF."
}

variable "github_repo_id" {
  type        = string
  description = "Numeric ID of github_repo; unlike its name, it can't be reclaimed."
}
