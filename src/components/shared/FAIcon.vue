<template lang="pug">
i(:class="iconClass" aria-hidden="true")
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class FAIcon extends Vue {
	@Prop() icon: { pack: string; name: string }

	get iconClass(): string {
		const pack = this.icon.pack || "fas"

		return `${pack} fa-${this.icon.name}`
	}
}
</script>
