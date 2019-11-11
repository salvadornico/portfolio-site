<template lang="pug">
.preloader-wrapper.small.active
	.spinner-layer.spinner-green-only
		.circle-clipper.left
			.circle
		.gap-patch
			.circle
		.circle-clipper.right
			.circle
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class LoadingSpinner extends Vue {}
</script>
