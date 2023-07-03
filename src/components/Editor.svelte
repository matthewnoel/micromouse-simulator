<script>
    import { runMaze } from '../editor';
    import { maze } from '../maze';
    import { parts } from '../mouse';
    import { AllocentricMovementController } from '../parts/allocentric-movement-controller';
    import { EgocentricMovementController } from '../parts/egocentric-movement-controller';
    import { TouchSensor } from '../parts/touch-sensor';
    import ExplorerBlock from './ExplorerBlock.svelte';

    let program = [];

    const allBlocks = [
        ...Object.entries(AllocentricMovementController.methods).map((e) => { return { part: AllocentricMovementController.name, key: e[0], title: e[1].title }}),
        ...Object.entries(EgocentricMovementController.methods).map((e) => { return { part: EgocentricMovementController.name, key: e[0], title: e[1].title }}),
        ...Object.entries(TouchSensor.methods).map((e) => { return { part: TouchSensor.name, key: e[0], title: e[1].title }})
    ];
    $: filteredBlocks = allBlocks.filter((e) => Object.values($parts).includes(e.part));

    function handleMessage(event) {
		program = [...program, event.detail];
	}
</script>

<div id="outer">
    <div>
        {#each filteredBlocks as {part, key, title}}
            <ExplorerBlock {part} {key} {title} on:message={handleMessage} />
        {/each}
    </div>
    <div>
        <p>Main</p>
        {#each program as line}
            <p>{line.title}</p>
        {/each}
    </div>
    <input type="button" value="Execute" on:click={() => runMaze(program, $maze, $parts)}>
</div>

<style>
    #outer {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
</style>
