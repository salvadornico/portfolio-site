<template lang="pug">
#app
	transition(name="component-fade" mode="out-in")
		router-view
	Footer
</template>

<script lang="ts">
import Footer from "@/components/shared/Footer.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	metaInfo() {
		return {
			titleTemplate: "Nico Salvador",
		}
	},
	components: {
		Footer,
	},
})
export default class App extends Vue {}
</script>

<style lang="stylus">
*
	position relative
	font-family "Open Sans", sans-serif

body
	background-color bodyColor

.component-fade-enter-active, .component-fade-leave-active
	transition opacity 0.3s ease

.component-fade-enter, .component-fade-leave-to
	opacity 0
</style>
