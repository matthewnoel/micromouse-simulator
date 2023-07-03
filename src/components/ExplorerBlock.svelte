<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function addInstruction(title, key) {
        dispatch('message', {
            title,
            value: key
        });
    }

    export let part;
    export let key;
    export let title;
</script>

<div>
    <p>{title}</p>
    <input type="button" value="+" on:click={() => addInstruction(title, `${part} -> ${key}`)} >
</div>

<style>
    p {
        display: inline-block;
    }
</style>
