<template lang="pug">
.fixed-action-btn.tooltipped(ref="tooltipped" data-position="left" data-delay="50" data-tooltip="Back to top")
	a.waves-effect.waves-circle.waves-light.btn-floating.btn-large.red.scale-transition.scale-out(ref="fabBtn" href="#app-banner" target="_parent" data-scroll @click="hideFAB()")
		MaterialIcon(icon="arrow_upward")
</template>

<script>
import MaterialIcon from "@/components/shared/MaterialIcon"

export default {
	components: {
		MaterialIcon,
	},
	data() {
		return {
			fabBtn: { type: HTMLAnchorElement },
		}
	},
	created: function() {
		this.$eventBus.$on("openFab", this.popOutFAB)
	},
	mounted: function() {
		this.fabBtn = this.$refs.fabBtn
		const elem = this.$refs.tooltipped
		/* eslint-disable no-unused-vars */
		const instance = M.Tooltip.init(elem, {})
	},
	beforeDestroy: function() {
		this.$eventBus.$off("openFab")
	},
	methods: {
		popOutFAB: function() {
			const fab = this.fabBtn
			fab.classList.replace("scale-out", "scale-in")
			fab.classList.add("pulse")
			setTimeout(() => {
				fab.classList.remove("pulse")
			}, 10000)
		},
		hideFAB: function() {
			this.fabBtn.classList.remove("pulse")
			this.fabBtn.classList.replace("scale-in", "scale-out")
		},
	},
}
</script>

<style lang="stylus" scoped>
.fixed-action-btn
	bottom 6rem
</style>
