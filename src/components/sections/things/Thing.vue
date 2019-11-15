<template lang="pug">
.thing.col.s6.m4.l3
		a(:href="link")
			.card.small.hoverable
				.card-image
					img(:src="imagePath({ file: image, path: 'things' })" :alt="name")
				.card-content.valign-wrapper
					span.black-text {{ name }}
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class Thing extends Vue {
	@Prop() image: string
	@Prop() name: string
	@Prop() link: string
}
</script>

<style lang="postcss" scoped>
/* .thing
	width 10rem

	a:link
		color black

	span
		font-size 1.5rem */
</style>
