<template lang="pug">
#profile
	Banner
	main
		Parallax(image="kotlin-snippet.png" alt="Some Kotlin sample code")
		.container
			transition(name="component-fade" mode="out-in")
				router-view
		Parallax(type="video" video="/static/images/makerbot.mp4" image="header2gif.gif" alt="3D printing")
		Contacts
	FAB
</template>

<script lang="ts">
import Banner from "@/components/profile/body-sections/Banner.vue"
import Contacts from "@/components/profile/body-sections/contacts/Contacts.vue"
import FAB from "@/components/profile/body-sections/FAB.vue"
import Parallax from "@/components/shared/Parallax.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		Banner,
		Parallax,
		Contacts,
		FAB,
	},
})
export default class Profile extends Vue {}
</script>

<style lang="stylus">
.component-fade-enter-active, .component-fade-leave-active
	transition opacity 0.3s ease

.component-fade-enter, .component-fade-leave-to
	opacity 0
</style>
