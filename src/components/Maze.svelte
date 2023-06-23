<script>
import { length, width, start, end } from '../maze';
import { x, y } from '../mouse';

$: mazeDetails = JSON.stringify({length: $length, width: $width, start: $start, end: $end});
$: mouseDetails = JSON.stringify({x: $x, y: $y});
</script>

{#each [...Array($length).keys()] as l}
    <p>
        {#each [...Array($width).keys()] as w}
            {#if $x === w && $y === l}
                <span>🐭</span>
            {:else if $start.x === w && $start.y === l}
                <span>🟪</span>
            {:else if $end.x === w && $end.y === l}
                <span>🟩</span>
            {:else}
                <span>🟨</span>
            {/if}
        {/each}
    </p>
    <br>
{/each}
<p>Maze: {mazeDetails}</p>
<br>
<p>Mouse: {mouseDetails}</p>

<style>
    p {
        display: inline-block;
        font-family: monospace;
        background-color: beige;
        color: coral;
    }
</style>