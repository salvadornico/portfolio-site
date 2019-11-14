<template lang="pug">
i(:class="iconClass" aria-hidden="true")
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class FAIcon extends Vue {
	@Prop() icon: { pack: string; name: string } | string

	get iconClass(): string {
		if (typeof this.icon === 'string') {
			return `fas fa-${this.icon}`
		}

		const pack = this.icon.pack || "fas"

		return `${pack} fa-${this.icon.name}`
	}
}
</script>
