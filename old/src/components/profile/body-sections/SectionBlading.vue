<template lang="pug">
SectionCard(title="Inline skating")
	.row
		.col.s12.m8
			p.
				I've been at it on and off since 2002 (see my lame 2011-era video footage to the side), skating parks around the Philippines, Malaysia, China, Singapore, Korea, and Australia along the way.
			p.
				Founded <a href="https://www.facebook.com/ElevateSkate/">Elevate Skate Co.</a> a while back, importing gear from shops all over the world. It's closed now, as nice of a side hustle as it was. I also learned a lot about filming and editing video from being involved here.
		.col.s12.m4
			.video-container
				iframe(src="https://player.vimeo.com/video/31335546?portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen)
</template>

<script lang="ts">
import SectionCard from "@/components/shared/SectionCard.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		SectionCard,
	},
})
export default class SectionBlading extends Vue {}
</script>
