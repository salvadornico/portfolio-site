<template lang="pug">
SectionCard(title="Software Development")
	.row
		.col.s12.m8
			p I've always enjoyed tinkering with technology and poking around the deepest levels of software settings, so programming was a natural next step. I love the way it demands both the ability to solve problems creatively and then the application of those ideas in a logical and systematic fashion.
		.col.s12.m4
			g-image(src="~/assets/images/vue-snippet.png" alt="Vue code snippet")
	.card-action
		router-link(to="/portfolio") Portfolio
		router-link(to="/skills") My Stack
</template>

<script lang="ts">
import SectionCard from "~/components/shared/SectionCard.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		SectionCard,
	},
})
export default class SectionSoftware extends Vue {}
</script>
