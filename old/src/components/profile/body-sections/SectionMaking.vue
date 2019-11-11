<template lang="pug">
SectionCard(title="Making Things")
	p.
		Design thinking has always been my mindset. There's just something special about creating something new with your hands, whatever it is... 3D modelling and printing, Lego, basic woodworking, and hopefully electronics as well soon.
	p.
		Coding is making too :)
	.center-align
		.row
			.col.s6
				a(href="https://www.instagram.com/p/BQXN2cAgAO7/")
					img.responsive-img(:src="imagePath( { file: '3d_printing.jpg', path: 'portfolio' })" alt="3D printing at Builtable Makerspace")
			.col.s6
				a(href="https://www.instagram.com/p/BMdli-lAUpg/")
					img.responsive-img(:src="imagePath( { file: 'lego_dinosaur.jpg', path: 'portfolio' })" alt="Lego creation")
		.row
			img.responsive-img(:src="imagePath( { file: 'park_design.jpg', path: 'portfolio' })" alt="3D modelled skatepark design")
</template>

<script lang="ts">
import SectionCard from "@/components/shared/SectionCard.vue"
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		SectionCard,
	},
	mixins: [ImageService],
})
export default class SectionMaking extends Vue implements ImageService {
	imagePath: (options: ImagePathOptions) => string
}
</script>
