<template lang="pug">
#skills
	BackButton
	br
	.card
		.card-content
			span.card-title My Tech Stack
			#skillsList
				.category(v-for="(items, category) in skills")
					h5 {{ category | capitalize }}
					a(v-for="skill in items" :href="skill.url" )
						figure.tech-skill
							img(:src="imagePath({ file: skill.icon, path: 'logos' })" :alt="skill.name")
							figcaption {{ skill.name }}
	BackButton
	br
</template>

<script lang="ts">
import BackButton from "@/components/shared/BackButton.vue"
import { ImagePathOptions, ImageService } from "@/helpers/images.service"
import { capitalize } from "@/helpers/utils"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		BackButton,
	},
	mixins: [ImageService],
	filters: {
		capitalize,
	},
})
export default class Skills extends Vue implements ImageService {
	imagePath: (options: ImagePathOptions) => string

	skills = {
		languages: [
			{
				icon: "js.svg",
				name: "Javascript",
				url: "https://www.javascript.com",
			},
			{
				icon: "kotlin.svg",
				name: "Kotlin",
				url: "https://kotlinlang.org",
			},
			{
				icon: "php.svg",
				name: "PHP",
				url: "http://php.net",
			},
			{
				icon: "python.png",
				name: "Python",
				url: "https://www.python.org",
			},
			{
				icon: "typescript.png",
				name: "Typescript",
				url: "https://www.typescriptlang.org",
			},
			{
				icon: "java.png",
				name: "Java",
				url: "http://oracle.com/java/",
			},
		],
		markup: [
			{
				icon: "html.svg",
				name: "HTML",
				url: "https://www.w3.org/html/",
			},
			{
				icon: "pug.svg",
				name: "Pug",
				url: "https://pugjs.org",
			},
			{
				icon: "twig-logo.png",
				name: "Twig",
				url: "https://twig.symfony.com",
			},
		],
		styling: [
			{
				icon: "css.svg",
				name: "CSS",
				url: "https://www.w3.org/Style/CSS/",
			},
			{
				icon: "stylus.png",
				name: "Stylus",
				url: "http://stylus-lang.com",
			},
		],
		frameworks: [
			{
				icon: "android.png",
				name: "Android",
				url: "https://www.android.com",
			},
			{
				icon: "angular.svg",
				name: "Angular",
				url: "https://angular.io",
			},
			{
				icon: "flask.png",
				name: "Flask",
				url: "http://http://flask.pocoo.org/",
			},
			{
				icon: "laravel.png",
				name: "Laravel",
				url: "https://laravel.com",
			},
			{
				icon: "symfony.svg",
				name: "Symfony",
				url: "https://symfony.com",
			},
			{
				icon: "vue.svg",
				name: "VueJS",
				url: "https://vuejs.org",
			},
		],
		databases: [
			{
				icon: "mongodb.png",
				name: "MongoDB",
				url: "https://www.mongodb.com",
			},
			{
				icon: "mysql.png",
				name: "MySQL",
				url: "https://www.mysql.com",
			},
			{
				icon: "firebase.png",
				name: "Firebase",
				url: "https://firebase.google.com",
			},
		],
	}
}
</script>

<style lang="stylus" scoped>
#skillsList
	color black
	margin 1rem

.tech-skill
	display inline-block

	margin 1rem
		@media TabletDown
			margin 0.3rem

	img
		height 4rem

		@media TabletDown
			height @height * 0.7

	figcaption
		text-align center
</style>
