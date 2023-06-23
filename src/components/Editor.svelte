<script>
    import { program, runMaze } from '../editor';
    import { start } from '../maze';
</script>
<p>Program:{$program}</p>
<input type="button" value="Execute" on:click={() => runMaze($program, $start)}>