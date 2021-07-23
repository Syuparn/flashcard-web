<script lang="ts">
    export let name: string;
</script>

<button on:click>
    {name}
</button>

<style>
    button {
        font-size: 2em;
        border-width: 0.03em;
        border-radius: 0.1em;
        background-color: #aaa;
        color: #fff;
    }
</style>
