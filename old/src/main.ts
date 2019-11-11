import router from "@/router"
import store from "@/store"
import Vue from "vue"
import VueAnalytics from "vue-analytics"
import App from "./App.vue"

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue()

Vue.use(VueAnalytics, {
	id: "UA-92196324-1",
	router,
	debug: {
		sendHitTask: process.env.NODE_ENV === "production",
	},
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
