<script>
    import Maze from "./Maze.svelte";
    import Builder from "./Builder.svelte";

    let tab = 'Build';
</script>


<div>
    <div>
        <input disabled={tab === 'Race'} type="button" value="Race" on:click={() => tab = 'Race'}>
        <input disabled={tab === 'Build'} type="button" value="Build" on:click={() => tab = 'Build'}>
    </div>
    {#if tab === 'Build'}
        <Builder />
    {:else if tab === 'Race'}
        <Maze />
    {:else}
        <p>Something went wrong.</p>
    {/if}
</div>