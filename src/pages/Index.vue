<template lang="pug">
Layout
	#app-body
		// Learn how to use images here: https://gridsome.org/docs/images
		g-image(alt="Example image" src='~/favicon.png' width='135')
		h1.text-xl Hello, world!
		p
		| Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
		p.home-links
			a(href='https://gridsome.org/docs/' target='_blank' rel='noopener') Gridsome Docs
			a(href='https://github.com/gridsome/gridsome' target='_blank' rel='noopener') GitHub
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	metaInfo: {
		title: "Hi there!"
	}
})
</script>
