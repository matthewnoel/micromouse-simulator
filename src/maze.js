import { writable } from 'svelte/store';

export const maze = writable({
    length: 4,
    width: 4,
    start: { x: 0, y: 3 },
    end: { x: 3, y: 0 },
    walls: [{x1: 0, y1: 1, x2: 1, y2: 1}, {x1: 2, y1: 2, x2: 2, y2: 3}]
});

export const doesSideMatchWall = (x1, y1, x2, y2, wall) => {
    const sideSlope = Math.abs(y1 - y2) / Math.abs(x1 - x2);
    const wallSlope = Math.abs(wall.y1 - wall.y2) / Math.abs(wall.x1 - wall.x2);
    if (sideSlope != wallSlope) return false;
    if (sideSlope === 0 && y1 === wall.y1) {
        return Math.min(x1, x2) >= Math.min(wall.x1, wall.x2) && Math.max(x1, x2) <= Math.max(wall.x1, wall.x2);
    } else if (sideSlope === Infinity && x1 === wall.x1) {
        return Math.min(y1, y2) >= Math.min(wall.y1, wall.y2) && Math.max(y1, y2) <= Math.max(wall.y1, wall.y2);
    }
    return false;
};
