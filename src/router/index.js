import Vue from "vue"
import Router from "vue-router"
import Body from "@/components/Body"

Vue.use(Router)

export default new Router({
	routes: [{
		path: "/",
		component: Body
	}]
})
