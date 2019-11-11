<template lang="pug">
.portfolio-item
	img.responsive-img(:src="imagePath({ file: project.image, path: 'portfolio', size: 'thumb' })")
	.portfolio-item-description
		a(:href="project.url")
			h4 {{ project.title }}
		p {{ project.description }}
</template>

<script lang="ts">
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component({
	mixins: [ImageService],
})
export default class PortfolioItem extends Vue implements ImageService {
	@Prop() project: any

	imagePath: (options: ImagePathOptions) => string
}
</script>

<style lang="stylus" scoped>
.portfolio-item
	padding 1rem
	display grid

	&:hover
		grid-row span 2
		background-color lightGrey

	.portfolio-item-description
		display none

	&:hover
		display grid

		.portfolio-item-description
			display block
</style>
