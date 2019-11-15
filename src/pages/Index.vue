<template lang="pug">
Layout
	#app-body
		h2.text-center.text-white.font-bold.text-3xl Things I'm Into
		SectionSoftware
		SectionMaking
		SectionMarketing
		SectionBlading
		OtherThings
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import OtherThings from "~/components/sections/things/OtherThings.vue"
import SectionBlading from "~/components/sections/SectionBlading.vue"
import SectionMaking from "~/components/sections/SectionMaking.vue"
import SectionMarketing from "~/components/sections/SectionMarketing.vue"
import SectionSoftware from "~/components/sections/SectionSoftware.vue"

@Component({
	components: {
		SectionSoftware,
		SectionMaking,
		SectionMarketing,
		SectionBlading,
		OtherThings,
	},
	metaInfo: {
		title: "Hi there!"
	},
})
export default class Body extends Vue {}
</script>
