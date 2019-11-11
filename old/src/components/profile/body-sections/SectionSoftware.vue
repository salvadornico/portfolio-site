<template lang="pug">
SectionCard(title="Software Development")
	.row
		.col.s12.m8
			p I've always enjoyed tinkering with technology and poking around the deepest levels of software settings, so programming was a natural next step. I love the way it demands both the ability to solve problems creatively and then the application of those ideas in a logical and systematic fashion.
		.col.s12.m4
			img.responsive-img(:src="imagePath( { file: 'vue-snippet.png' })")
	.card-action(slot="links")
		router-link(to="/portfolio") Portfolio
		router-link(to="/skills") My Stack
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
export default class SectionSoftware extends Vue implements ImageService {
	imagePath: (options: ImagePathOptions) => string
}
</script>
