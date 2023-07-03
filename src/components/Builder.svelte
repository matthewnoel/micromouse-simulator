<script>
    import { parts, addPart } from '../mouse';
    import { AllocentricMovementController } from '../parts/allocentric-movement-controller';
	import { EgocentricMovementController } from '../parts/egocentric-movement-controller';
	import { TouchSensor } from '../parts/touch-sensor';

    let partsList = [
        { id: 0, name: 'Choose Part' },
		{ id: 1, name: AllocentricMovementController.name },
		{ id: 2, name: EgocentricMovementController.name },
		{ id: 3, name: TouchSensor.name }
	];
	let selected;

	function handleSubmit() {
        addPart(selected.name);
	}
</script>
<h1>Builder Tool</h1>
<p>{JSON.stringify($parts)}</p>
<form on:submit|preventDefault={handleSubmit}>
	<select bind:value={selected}>
		{#each partsList as part}
			<option value={part}>
				{part.name}
			</option>
		{/each}
	</select>
	<button disabled={!selected || selected.id === 0} type="submit">Add Part</button>
</form>