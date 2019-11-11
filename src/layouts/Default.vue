<template lang="pug">
#profile
	.content
		Banner
		main
			//- Parallax(image="kotlin-snippet.png" alt="Some Kotlin sample code")
			.container
				slot
			//- Parallax(type="video" video="/static/images/makerbot.mp4" image="header2gif.gif" alt="3D printing")
			//- Contacts
		//- FAB
	Footer
</template>

<script lang="ts">
import Banner from "~/components/Banner.vue"
// import Contacts from "~/components/profile/body-sections/contacts/Contacts.vue"
// import FAB from "~/components/profile/body-sections/FAB.vue"
// import Parallax from "~/components/shared/Parallax.vue"
import Footer from "~/components/Footer.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		Banner,
		// Parallax,
		// Contacts,
		// FAB,
		Footer,
	},
})
export default class Profile extends Vue {}
</script>

<style lang="postcss">
* {
	font-family: "Open Sans", sans-serif;
}

html {
	height: 100%;
}

#profile {
	background-color: #3949ab;
	min-height: 100%;
	display: grid;
	grid-template-rows: 1fr auto;
}

footer {
	grid-row-start: 2;
	grid-row-end: 3;
}
</style>
