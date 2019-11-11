<template lang="pug">
header#app-banner.container
	.row
		.col.s12.l5
			.card.large.hoverable
				.card-image
					img(:src="imagePath({ file: 'portrait.png' })" alt="That's me!")
				.card-content
					h1 Nico Salvador
					h3 Quezon City, Philippines
					.center-align
						a(v-for="link in links" :href="link.url")
							FAIcon(:icon="link.icon")

		.col.s12.m10.offset-m1.l7.sidebox
			.row
				.col.s12
					h2 Hi, I'm Nico.
					p.
						I'm into all sorts of things.#[br]Maybe we can work on something together?
					p.
						I've always had a hard time picking what it is I'm most into over the course of my life. There are just so many awesome things out there in the world to be involved in, why just choose one? I believe that incredible things can come out of the most unlikely partnerships.
					h3 Let's get in touch!
			.row.center-align
				.col.s12.m6.offset-m3.pull-l3
					a#scrollDownBtn.waves-effect.waves-light.btn-large.red.darken-1.hoverable(href="#contacts" target="_parent" data-scroll @click="openFab()")
						MaterialIcon.left(icon="chat_bubble")
						span Contact Me
			.row
				a#seeMore.hvr-icon-hang.white-text(href="#app-body" target="_parent" data-scroll)
</template>

<script lang="ts">
import FAIcon from "@/components/shared/FAIcon.vue"
import MaterialIcon from "@/components/shared/MaterialIcon.vue"
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		FAIcon,
		MaterialIcon,
	},
	mixins: [ImageService],
})
export default class Banner extends Vue implements ImageService {
	$eventBus: any
	imagePath: (options: ImagePathOptions) => string

	links = [
		{
			url: "mailto:salvador.nico@gmail.com",
			icon: { name: "envelope" },
		},
		{
			url: "https://github.com/salvadornico",
			icon: { pack: "fab", name: "github" },
		},
		{
			url: "https://www.linkedin.com/in/salvadornico",
			icon: { pack: "fab", name: "linkedin" },
		},
		{
			url: "https://www.facebook.com/salvador.nico",
			icon: { pack: "fab", name: "facebook-official" },
		},
	]

	openFab() {
		this.$eventBus.$emit("openFab")
	}
}
</script>

<style lang="stylus">
#app-banner
	min-height 100vh

	@media TabletUp
		padding-top 10vh

		& > div
			center Y absolute

		.card
			@media TabletDown
				max-width 60%
				margin 0 auto

	.card-content
		height 100%

		& > *
			font-family "Montserrat", sans-serif
			display block
			color black

		h1
			margin-top 0.3rem
			font-size 2rem

		h3
			font-size 1.6rem

		div
			position absolute
			bottom 0
			margin-bottom 3%

		a
			display inline-block
			margin auto 0.4rem 0.4rem

		i
			color black
			font-size 1.7rem

.sidebox
	color white

	a
		display block
		min-width 10rem

#seeMore
	font-size 1.25rem
	text-align center
	width 1rem
	center X absolute

	@media MobileOnly
		margin-top -1rem

highPoint = -2px
lowPoint = 6px

@keyframes hvr-icon-hang
	0%
		transform translateY(lowPoint)

	50%
		transform translateY(highPoint)

	100%
		transform translateY(lowPoint)

@keyframes hvr-icon-hang-sink
	100%
		transform translateY(lowPoint)

.hvr-icon-hang
	display inline-block
	vertical-align middle
	transform perspective(1px) translateZ(0)
	box-shadow 0 0 1px transparent
	position relative
	transition-duration 0.3s

	&:before
		content "\f063"
		text-align center
		position absolute
		font-family "Font Awesome 5 Free"
		font-weight 900
		transform translateZ(0)
		animation-name hvr-icon-hang-sink, hvr-icon-hang
		animation-duration 0.3s, 1.5s
		animation-delay 0s, 0.3s
		animation-timing-function ease-out, ease-in-out
		animation-iteration-count 1, infinite
		animation-fill-mode forwards
		animation-direction normal, alternate
</style>
