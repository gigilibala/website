variable "project_id" {
  type = string
}

variable "custom_domains" {
  type = map(object({
    redirect_target = optional(string)
  }))
  description = "Custom domains of the Hosting site, keyed by hostname."
}
