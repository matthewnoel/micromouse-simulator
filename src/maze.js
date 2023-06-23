import { writable } from 'svelte/store';

export const length = writable(4);
export const width = writable(4);
export const start = writable({ x: 0, y: 3 });
export const end = writable({ x: 3, y: 0 });