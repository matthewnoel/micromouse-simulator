import { writable } from 'svelte/store';
import { doesSideMatchWall } from './maze';

export const x = writable(0);
export const y = writable(0);
export const orientation = writable(0);
export const name = writable('Theseus');
export const parts = writable({
    front: '',
    right: '',
    back: '',
    left: '',
    center: ''
});

export const addPart = (name, location) => {
    if (!['front', 'right', 'back', 'left', 'center'].includes(location)) {
        return;
    }
    parts.update(n => Object.assign(n, {[location]: name}));
}


export const trySetPosition = (oldX, oldY, newX, newY, maze) => {
    if (newX == null || newY == null || maze == null) return;
    if (newX < 0 || newX > maze.width - 1 || newY < 0 || newY > maze.length - 1) {
        console.log('Hit outer wall');
        return;
    }
    if (Math.abs(oldX - newX) + Math.abs(oldY - newY) !== 1) {
        console.log('Non incremental movement');
        return;
    }
    const side = {x1: null, x2: null, y1: null, y2: null};
    if (oldX - newX === -1) {
        side.x1 = oldX + 1;
        side.y1 = oldY;
        side.x2 = oldX + 1;
        side.y2 = oldY + 1;
    } else if (oldX - newX === 1) {
        side.x1 = oldX;
        side.y1 = oldY;
        side.x2 = oldX;
        side.y2 = oldY + 1;
    } else if (oldY - newY === -1) {
        side.x1 = oldX;
        side.y1 = oldY + 1;
        side.x2 = oldX + 1;
        side.y2 = oldY + 1;
    } else if (oldY - newY === 1) {
        side.x1 = oldX;
        side.y1 = oldY;
        side.x2 = oldX + 1;
        side.y2 = oldY;
    } else {
        return;
    }
    for (const wall of maze.walls) {
        if (doesSideMatchWall(side.x1, side.y1, side.x2, side.y2, wall)) {
            console.log("Hit wall");
            return;
        }
    }
    x.set(newX);
    y.set(newY);
};

export const setPosition = (newX, newY) => {
    x.set(newX);
    y.set(newY);
}
