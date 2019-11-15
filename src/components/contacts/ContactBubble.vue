<template lang="pug">
a(:href="url").inline-block.w-16.md_w-24
	g-image(:src="getIconPath(icon)" :alt="name")
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class ContactBubble extends Vue {
	@Prop() name: string
	@Prop() icon: string
	@Prop() url: string

	getIconPath(icon: string): string {
		return require(`!!assets-loader!~/assets/icons/${icon}.png`)
	}
}
</script>
