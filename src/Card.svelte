<script lang="ts">
	export let frontWord: string;
	export let backWord: string;
    let turnedOver = false;
    
    function flip() {
        turnedOver = !turnedOver;
    }
</script>

<button class="{turnedOver ? 'back-card' : 'front-card'}" on:click="{flip}">
    {turnedOver ? backWord : frontWord}
</button>

<style>
    button {
		text-transform: uppercase;
		font-size: 6em;
		font-weight: 100;
        border-width: 0.03em;
        border-radius: 0.3em;
    }

    .front-card {
        color: #ff3e00;
        background-color: white;
        border-color: #ff3e00;
    }

    .back-card {
        color: white;
        background-color: #ff3e00;
        border-color: #ff3e00;
    }
</style>

