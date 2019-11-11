<template lang="pug">
footer.red.darken-4
	p.center-align.
		© {{ currentYear }} Nico Salvador
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Footer extends Vue {
	get currentYear(): number {
		return new Date().getFullYear()
	}
}
</script>

<style lang="stylus">
footer
	color white
	position absolute
	bottom 0
	width 100%

	p
		line-height 2.4rem
</style>
