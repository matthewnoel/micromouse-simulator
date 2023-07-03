<script>
import { maze, doesSideMatchWall } from '../maze';
import { x, y } from '../mouse';

const getWallBorderStyle = (x, y) => {
    let style = '';
    const keys = [];
    for (const wall of $maze.walls) {
        if (doesSideMatchWall(x, y, x + 1, y, wall)) {
            keys.push('border-top');
        }
        if (doesSideMatchWall(x + 1, y, x + 1, y + 1, wall)) {
            keys.push('border-right');
        }
        if (doesSideMatchWall(x, y + 1, x + 1, y + 1, wall)) {
            keys.push('border-bottom');
        }
        if (doesSideMatchWall(x, y, x, y + 1, wall)) {
            keys.push('border-left');
        }
    }
    if (keys.length > 0) {
        style = keys.map(p => `${p}: 1px solid black;`).join('');
    }
    return style;
};
</script>

{#each [...Array($maze.length).keys()] as l}
    <p>
        {#each [...Array($maze.width).keys()] as w}
            {#if $x === w && $y === l}
                <span style={getWallBorderStyle(w, l)}>🐭</span>
            {:else if $maze.start.x === w && $maze.start.y === l}
                <span style={getWallBorderStyle(w, l)}>🟪</span>
            {:else if $maze.end.x === w && $maze.end.y === l}
                <span style={getWallBorderStyle(w, l)}>🟩</span>
            {:else}
                <span style={getWallBorderStyle(w, l)}>🟨</span>
            {/if}
        {/each}
    </p>
    <br>
{/each}

<style>
    p {
        display: inline-block;
        font-family: monospace;
        background-color: beige;
        color: coral;
    }

    span {
        border: 1px solid transparent;
    }
</style>