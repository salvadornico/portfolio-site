<template lang="pug">
footer.bg-red-700
	p.text-center.
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

<style lang="postcss">
footer {
	color: white;

	& p {
		line-height: 2.4rem;
	}
}
</style>
