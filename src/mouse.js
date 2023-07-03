import { writable } from 'svelte/store';

export const x = writable(0);
export const y = writable(0);
export const orientation = writable(0);
export const name = writable('Theseus');
export const parts = writable({});

export const addPart = (name) => {
    parts.update(n => Object.assign({[Object.keys(n).length]: name}, n));
}

export const setPosition = (newX, newY) => {
    x.set(newX);
    y.set(newY);
}
