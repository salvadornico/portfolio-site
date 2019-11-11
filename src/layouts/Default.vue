<template lang="pug">
#app
	//- transition(name="component-fade" mode="out-in")
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

<style>
body {
	display: flex;
	min-height: 100vh;
	width: 100%;
	flex-direction: column;
	background-color: #3949ab;
}

main {
	flex: 1 0 auto;
}

* {
	position: relative;
	font-family: "Open Sans", sans-serif;
}

.component-fade-enter-active, .component-fade-leave-active {
	transition: opacity 0.3s ease;
}

.component-fade-enter, .component-fade-leave-to {
	opacity: 0;
}
</style>
