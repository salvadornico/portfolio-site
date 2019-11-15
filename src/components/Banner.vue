<template lang="pug">
#banner.md_min-h-screen
	.container.mx-auto.md_px-4
		.profile-card.bg-white.rounded.shadow-lg.m-4
			g-image(src="~/assets/images/portrait.png" alt="Drawing of me")
			.card-content.p-8
				h1.text-4xl Nico Salvador
				h3.text-3xl Quezon City, Philippines
				.mt-4
					a.mx-1(v-for="link in links" :href="link.url")
						FAIcon(:icon="link.icon")

		.sidebox.p-8.text-white.flex.flex-col.justify-center
			h2.text-4xl Hi, I'm Nico.
			p.
				I'm into all sorts of things.#[br]Maybe we can work on something together?
			p.
				I've always had a hard time picking what it is I'm most into over the course of my life. There are just so many awesome things out there in the world to be involved in, why just choose one? I believe that incredible things can come out of the most unlikely partnerships.
			h3.text-3xl Let's get in touch!
			a#scrollDownBtn.bg-red-700.rounded.shadow-lg.p-8.mt-6.ml-3.cursor-pointer.text-center(class="w-3/4 md_w-2/4" v-scroll-to="'#contacts'")
				FAIcon.mx-4(icon="comment")
				span.font-semibold Contact Me
			a#seeMore.text-3xl.mt-8.text-center.cursor-pointer(v-scroll-to="'#app-body'")
				FAIcon(icon="chevron-down")
</template>

<script lang="ts">
import FAIcon from "~/components/shared/FAIcon.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		FAIcon
	},
})
export default class Banner extends Vue {
	links = [
		{
			url: "mailto:salvador.nico@gmail.com",
			icon: { name: "envelope" }
		},
		{
			url: "https://github.com/salvadornico",
			icon: { pack: "fab", name: "github" }
		},
		{
			url: "https://www.linkedin.com/in/salvadornico",
			icon: { pack: "fab", name: "linkedin" }
		},
		{
			url: "https://www.facebook.com/salvador.nico",
			icon: { pack: "fab", name: "facebook-official" }
		}
	]
}
</script>

<style lang="postcss">
#banner {
	display: grid;
	grid-template-rows: 1fr auto 1fr;

	& > div {
		grid-row-start: 2;
		grid-row-end: 3;

		@media (min-width: 768px) {
			display: grid;
			grid-template-columns: 40% 60%;
		}
	}

	& .card-content {
		& h1, h3 {
			font-family: Montserrat, sans-serif;
		}

		& i {
			font-size: 1.7rem;
		}
	}

	& .sidebox > * {
		padding: 0.75rem;
	}
}
</style>
