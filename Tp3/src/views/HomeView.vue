<template>
<main>
	<WelcomeWord></WelcomeWord>
	<LastMoviesAdded></LastMoviesAdded>
</main>
</template>

<script>
	import WelcomeWord from '@/components/WelcomeWord.vue'
	import LastMoviesAdded from '@/components/LastMoviesAdded.vue'
	export default {
		name: 'HomeView',
		components: {
			WelcomeWord,
			LastMoviesAdded
		},
		setup() {
			return {}
		},
		mounted(){
            document.title = "Home";
        }
	}
</script>

<style scoped>

</style>