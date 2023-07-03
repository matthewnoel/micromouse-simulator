import { x, y } from '../mouse';

const moveUp = () => {
    y.update(n => n - 1);
}
const moveRight = () => {
    x.update(n => n + 1);
}
const moveDown = () => {
    y.update(n => n + 1);
}
const moveLeft = () => {
    x.update(n => n - 1);
}

export const AllocentricMovementController = {
    name: 'Allocentric Movement Controller',
    methods: {
        moveUp: () => moveUp(),
        moveRight: () => moveRight(),
        moveDown: () => moveDown(),
        moveLeft: () => moveLeft()
    }
};