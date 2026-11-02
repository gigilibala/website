variable "project_id" {
  type = string
}

variable "github_repo" {
  type        = string
  description = "owner/repo that may assume the deploy SA via WIF."
}
