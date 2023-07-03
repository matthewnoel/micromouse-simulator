<script>
    import { parts, addPart } from '../mouse';
    import { AllocentricMovementController } from '../parts/allocentric-movement-controller';
	import { EgocentricMovementController } from '../parts/egocentric-movement-controller';
	import { TouchSensor } from '../parts/touch-sensor';

    const partsList = [{name: 'Choose Part'}, AllocentricMovementController, EgocentricMovementController, TouchSensor];
	let selectedPart;
	let selectedLocation;
	$: locationsList = selectedPart?.locations ?? [];

	function handleSubmit() {
        addPart(selectedPart.name, selectedLocation);
	}
</script>

<p>{JSON.stringify($parts)}</p>
<form on:submit|preventDefault={handleSubmit}>
	<select bind:value={selectedPart} on:change={() => (selectedLocation = selectedPart.locations?.[0])}>
		{#each partsList as part}
			<option value={part}>
				{part.name}
			</option>
		{/each}
	</select>
	{#if locationsList.length > 0}
		<select bind:value={selectedLocation}>
			{#each locationsList as location}
				<option value={location}>
					{location}
				</option>
			{/each}
		</select>
	{/if}
	<button disabled={!selectedPart || selectedPart === partsList[0]} type="submit">Add Part</button>
</form>