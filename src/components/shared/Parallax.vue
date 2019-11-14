<template lang="pug">
.parallax-container
	slot
</template>

<script lang="ts">
import Rellax from "rellax"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Parallax extends Vue {
	mounted() {
		var rellax = new Rellax('.parallax-container', {
			speed: 2,
			center: true,
		})
	}
}
</script>
