<template lang="pug">
#portfolio
	BackButton
	br
	.card
		.card-content
			span.card-title Portfolio
			.portfolio
				GithubTile
				template(v-for="(project, index) in projects")
					PortfolioItem(:project="project")
	BackButton
	br
</template>

<script lang="ts">
import GithubTile from "@/components/profile/body-sections/portfolio/GithubTile.vue"
import PortfolioItem from "@/components/profile/body-sections/portfolio/PortfolioItem.vue"
import BackButton from "@/components/shared/BackButton.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		BackButton,
		GithubTile,
		PortfolioItem,
	},
})
export default class Portfolio extends Vue {
	projects = [
		{
			title: "Chef Plus",
			description:
				"A corporate website for a food service equipment company",
			url: "https://chefplus.com.ph",
			image: "chefplus.png",
		},
		{
			title: "What's That Edit?",
			description: "A site for sharing and indexing skate videos",
			url: "http://whats-that-edit.herokuapp.com",
			image: "whats-that-edit.png",
		},
		{
			title: "Monoposto",
			description: "Formula 1 data visualisation site",
			url: "http://salvadornico.x10host.com/f1vis/",
			image: "monoposto.png",
		},
		{
			title: "Brain Train",
			description: "A simple memory game",
			url: "https://salvadornico.github.io/Brain-Train/web",
			image: "brain-train.png",
		},
		{
			title: "Leather & Turf",
			description: "A Philippines Football League club reference site",
			url: "https://salvadornico.github.io/Tuitt/module-1/capstone1",
			image: "leather-turf.png",
		},
		{
			title: "Rock Paper Scissors",
			description: "A Rock-Paper-Scissors-Lizard-Spock Android game",
			url: "https://github.com/salvadornico/Rock-Paper-Scissors",
			image: "lizard-spock.png",
		},
	]
}
</script>

<style lang="stylus" scoped>
.card-title
	font-weight bold

.portfolio
	display grid
	grid-template-columns repeat(auto-fit, minmax(10rem, 1fr))
	grid-gap 1rem
	grid-autoflow dense
</style>
