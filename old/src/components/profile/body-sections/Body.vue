<template lang="pug">
#app-body
	h2 Things I'm Into
	SectionSoftware
	SectionMaking
	SectionMarketing
	SectionBlading
	OtherThings
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import OtherThings from "./OtherThings.vue"
import SectionBlading from "./SectionBlading.vue"
import SectionMaking from "./SectionMaking.vue"
import SectionMarketing from "./SectionMarketing.vue"
import SectionSoftware from "./SectionSoftware.vue"

@Component({
	components: {
		SectionSoftware,
		SectionMaking,
		SectionMarketing,
		SectionBlading,
		OtherThings,
	},
})
export default class Body extends Vue {}
</script>

<style lang="stylus" scoped>
h2
	text-align center
	color white
</style>
