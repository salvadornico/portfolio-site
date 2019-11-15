<template lang="pug">
#contacts.flex.flex-col.items-center.min-h-screen.mt-8.text-white
	h4.text-3xl.font-bold My Work
	.mb-8.text-center
		ContactBubble(url="https://github.com/salvadornico", icon="github", name="GitHub")
		ContactBubble(url="https://codepen.io/salvadornico", icon="codepen", name="CodePen")
		ContactBubble(url="https://vimeo.com/roller4life", icon="vimeo", name="Vimeo")

	h4.text-3xl.font-bold Get In Touch
	.mb-8.text-center
		ContactBubble(url="mailto:salvador.nico@gmail.com", icon="email", name="Email")
		ContactBubble(url="https://www.linkedin.com/in/salvadornico", icon="linkedin", name="LinkedIn")
		ContactBubble(url="https://www.instagram.com/nicolrnzo", icon="instagram", name="Instagram")
		ContactBubble(url="https://www.facebook.com/salvador.nico", icon="fb", name="Facebook")
		ContactBubble(url="https://twitter.com/nicoLorenzooo", icon="twitter", name="Twitter")
		ContactBubble(url="https://www.pinterest.com/roller4life/", icon="pinterest", name="Pinterest")

	a#resumeLink.bg-red-700.rounded.shadow-lg.p-6.mt-6(href="../static/files/Nico-Salvador-CV.pdf")
		FAIcon.mr-4(icon="file-alt")
		span.font-semibold RESUM&#201;
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import ContactBubble from "~/components/contacts/ContactBubble.vue"
import FAIcon from "~/components/shared/FAIcon.vue"

@Component({
	components: {
		ContactBubble,
		FAIcon,
	},
})
export default class Contacts extends Vue {}
</script>
