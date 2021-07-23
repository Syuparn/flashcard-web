<script lang="ts">
	import { words, wordsLength } from './words.js';
	import Card from "./Card.svelte";
	import Button from "./Button.svelte";
	import Header from "./Header.svelte";

	let wordIndex = 0;
	function nextCard() {
		wordIndex = (wordIndex + 1) % $wordsLength;
	}
	function previousCard() {
		// NOTE: n % $wordsLength < 0 if n < 0
		wordIndex = (wordIndex + $wordsLength - 1) % $wordsLength;
	}
</script>

<main>
	<Header></Header>
	<div class="left">
		<Button name="Back" on:click={previousCard}></Button>
	</div>
	<div class="right">
		<Button name="Next" on:click={nextCard}></Button>
	</div>
	<Card
	  frontWord={$words[wordIndex].frontWord}
	  backWord={$words[wordIndex].backWord}>
	</Card>
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

	.left {
		text-align: left;
	    float: left;
	}

	.right {
		text-align: right;
	}
</style>