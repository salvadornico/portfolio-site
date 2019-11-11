import { getJson } from "@/helpers/utils"

export const githubService = {
	get: () =>
		getJson(
			"https://api.github.com/users/salvadornico/repos?sort=pushed&page=1&per_page=5",
		),
}
