<template lang="pug">
#profile
	.content
		Banner
		main
			Parallax
				g-image.w-full(src="~/assets/images/kotlin-snippet.png" width="1000" height="300" alt="Some Kotlin sample code")

			.container
				slot

			Parallax
				.image-row
					g-image.w-full(class=".w-2/4" src="~/assets/images/3dprinting.jpg" width="600" height="350" alt="3D printing a Brachiosaurus skull")
					g-image.w-full(class=".w-2/4" src="~/assets/images/benchy.jpg" width="600" height="350" alt="3D Benchy")

			Contacts
	Footer
</template>

<script lang="ts">
import Banner from "~/components/Banner.vue"
import Contacts from "~/components/contacts/Contacts.vue"
import Parallax from "~/components/shared/Parallax.vue"
import Footer from "~/components/Footer.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		Banner,
		Parallax,
		Contacts,
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

	& .image-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
}

footer {
	grid-row-start: 2;
	grid-row-end: 3;
}
</style>
