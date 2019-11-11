<template lang="pug">
.row
	.col.s12
		.card.horizontal.section-card
			.card-image(v-if="image")
				img(:src="imagePath({ file: image })")
			.card-stacked
				.card-content
					span.card-title {{ title }}
					div(:class="{ margins: !image }")
						slot
				slot(name="links")
</template>

<script lang="ts">
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component({
	mixins: [ImageService],
})
export default class SectionCard extends Vue {
	@Prop() title: string
	@Prop() image: string

	imagePath: (options: ImagePathOptions) => string
}
</script>

<style lang="stylus" scoped>
.card
	color black
	width 100%

	&-image
		@media TabletUp
			width 20%

	.margins
		margin auto 2rem

	p
		margin 0.7rem auto
</style>
