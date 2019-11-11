import Body from "@/components/profile/body-sections/Body.vue"
import Portfolio from "@/components/profile/body-sections/portfolio/Portfolio.vue"
import Skills from "@/components/profile/body-sections/Skills.vue"
import Profile from "@/components/profile/Profile.vue"
import Vue from "vue"
import Meta from "vue-meta"
import Router from "vue-router"

Vue.use(Router)
Vue.use(Meta)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			component: Profile,
			children: [
				{
					path: "/",
					component: Body,
				},
				{
					path: "/portfolio",
					component: Portfolio,
				},
				{
					path: "/skills",
					component: Skills,
				},
			],
		},
	],
})
