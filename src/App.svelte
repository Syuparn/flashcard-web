<script lang="ts">
	import Card from "./Card.svelte";
	export let words: {frontWord: string, backWord: string}[];
</script>

<main>
	<Card frontWord={words[0].frontWord} backWord={words[0].backWord}></Card>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>