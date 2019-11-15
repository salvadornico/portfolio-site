<template lang="pug">
.bg-white.m-8.p-8.shadow-md
	h4.font-medium.text-2xl {{ title }}
	slot
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class SectionCard extends Vue {
	@Prop() title: string
	@Prop() image: string
}
</script>
