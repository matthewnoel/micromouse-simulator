<script>
    import { runMaze } from '../editor';
    import { start } from '../maze';
    import { parts } from '../mouse';

    let value = '^>^>^>v<^>';
</script>
<p>Program:{value}</p>
<textarea name="Program" id="program" bind:value cols="30" rows="10"></textarea>
<input type="button" value="Execute" on:click={() => runMaze(value, $start, $parts)}>