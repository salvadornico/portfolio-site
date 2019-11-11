<template lang="pug">
.back-button
	button.btn.waves-effect.waves-light.red.darken-1(@click="goBack()")
		MaterialIcon(icon="arrow_back")
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import MaterialIcon from "./MaterialIcon.vue"

@Component({
	components: {
		MaterialIcon,
	},
})
export default class BackButton extends Vue {
	@Prop({ default: "/" })
	path: string

	goBack() {
		this.$router.push({ path: this.path })
	}
}
</script>

<style lang="stylus" scoped>
.back-button
	margin-top 2rem
</style>
