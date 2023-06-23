import { writable } from 'svelte/store';

export const x = writable(0);
export const y = writable(0);

export const setPosition = (newX, newY) => {
    x.set(newX);
    y.set(newY);
}
export const moveUp = () => {
    y.update(n => n - 1);
}
export const moveRight = () => {
    x.update(n => n + 1);
}
export const moveDown = () => {
    y.update(n => n + 1);
}
export const moveLeft = () => {
    x.update(n => n - 1);
}