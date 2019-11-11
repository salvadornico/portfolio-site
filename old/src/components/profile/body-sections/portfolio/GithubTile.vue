<template lang="pug">
.github-tile.card.grey.lighten-2
	h5 Latest Github Activity
	ul
		li.repo(v-for="repo in repos")
			a.black-text(:href="repo.html_url") {{ repo.name }} ({{ repo.language }})
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { Action, Getter } from "vuex-class"

@Component
export default class GithubTile extends Vue {
	@Getter repos: any[]
	@Action fetchRepos: () => void

	created() {
		this.fetchRepos()
	}
}
</script>

<style lang="stylus" scoped>
.github-tile
	padding 1rem
	grid-column span 2

	a:hover
		color blue !important

	h5
		font-weight bold
</style>
