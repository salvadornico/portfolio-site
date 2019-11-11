<template lang="pug">
SectionCard(title="Marketing/PR/events")
	.row
		p.
			I graduated from the University of the Philippines with a degree in Business Administration. And while most of my experience afterwards has been in marketing, I'm perfectly comfortable discussing economics, finance, corporate strategy, or management, and have even been called up to draft a contract or two.
		p.
			I've helped organize an <a href="https://youtu.be/hyKqQg_m8Ds">indie-orchestra mashup concert</a>, <a href="https://www.youtube.com/watch?v=iqqKuvqXKj4">football tournaments</a>, and an <a href="https://motioncars.inquirer.net/28757/name-kias-pba-team-and-win-a-trip-to-an-nba-game-in-los-angeles">online contest to name a professional basketball team</a>, among many other less interesting things
	.row
		.col.s12.m6.center-align
			.video-container
				iframe(src="https://www.youtube.com/embed/hyKqQg_m8Ds" frameborder="0" allowfullscreen)
		.col.s12.m6.center-align
			.video-container
				iframe(src="https://www.youtube.com/embed/iqqKuvqXKj4" frameborder="0" allowfullscreen)
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
export default class SectionMarketing extends Vue {}
</script>
