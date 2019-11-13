// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue"

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout)

	head.link.push({
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css?family=Montserrat|Open+Sans"
	})
	head.link.push({
		rel: "stylesheet",
		href: "https://use.fontawesome.com/releases/v5.1.1/css/all.css",
		integrity:
			"sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ",
		crossorigin: "anonymous"
	})
}
