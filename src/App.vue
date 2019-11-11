<template lang="pug">
#app
	transition(name="component-fade" mode="out-in")
		router-view
</template>

<style lang="postcss">
.component-fade-enter-active, .component-fade-leave-active {
	transition: opacity 0.3s ease;
}

.component-fade-enter, .component-fade-leave-to {
	opacity: 0;
}
</style>
