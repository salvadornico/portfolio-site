<template lang="pug">
i.material-icons {{ icon }}
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class MaterialIcon extends Vue {
	@Prop() icon: string
}
</script>
