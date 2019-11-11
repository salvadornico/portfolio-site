<template lang="pug">
#default-layout
	slot
	Footer
</template>

<script lang="ts">
import Footer from "~/components/Footer.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		Footer,
	},
})
export default class App extends Vue {}
</script>

<style lang="postcss">
* {
	font-family: "Open Sans", sans-serif;
}

html {
	height: 100%;
}

body {
	min-height: 100%;
	display: grid;
	grid-template-rows: 1fr auto;
	background-color: #3949ab;
}

footer {
	grid-row-start: 2;
	grid-row-end: 3;
}
</style>
