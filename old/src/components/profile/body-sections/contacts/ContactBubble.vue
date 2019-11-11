<template lang="pug">
a(:href="url").contact-bubble
	img.hoverable(:src="imagePath({ file: `${icon}.png`, path: 'icons' })" :alt="name")
</template>

<script lang="ts">
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component({
	mixins: [ImageService],
})
export default class ContactBubble extends Vue implements ImageService {
	@Prop() name: string
	@Prop() icon: string
	@Prop() url: string

	imagePath: (options: ImagePathOptions) => string
}
</script>

<style lang="stylus" scoped>
img
	width 6rem
	border-radius 50%

	@media MobileOnly
		width 5rem
</style>
