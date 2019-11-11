<template lang="pug">
.parallax-container(:class="{ video:video }")
	.parallax(ref="parallax")
		img(v-if="type == 'image'" :src="imagePath({ file: image })" :alt="alt")
		video(v-if="type == 'video'" muted autoplay loop :poster="imagePath({ file: image })")
			source(:src="video" type="video/mp4")
</template>

<script lang="ts">
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

declare const M: any

@Component({
	mixins: [ImageService],
})
export default class Parallax extends Vue implements ImageService {
	@Prop({ default: "image" })
	type: string
	@Prop() image: string
	@Prop({ default: "" })
	video: string
	@Prop() alt: string

	imagePath: (options: ImagePathOptions) => string

	mounted() {
		const elem = this.$refs.parallax
		M.Parallax.init(elem, {})
	}
}
</script>

<style lang="stylus" scoped>
.parallax-container
	height 30rem

	&.video
		@media MobileOnly
			height 250px
			margin-bottom -100px

		@media TabletOnly
			height 550px
			margin-bottom -250px

		@media DesktopOnly
			margin-bottom 0

		video
			width 100vw
</style>
