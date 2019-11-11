import { githubService } from "@/helpers/github.service"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		repos: [],
	},
	getters: {
		repos: state => state.repos,
	},
	mutations: {
		fetchRepos: (state, repos) => {
			state.repos = repos
		},
	},
	actions: {
		fetchRepos: async context => {
			context.commit("fetchRepos", await githubService.get())
		},
	},
})
