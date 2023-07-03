import { x, y, trySetPosition } from '../mouse';

let currentX;
let currentY;
x.subscribe((value) => {
    currentX = value;
});
y.subscribe((value) => {
    currentY = value;
});

const moveUp = (maze) => {
    trySetPosition(currentX, currentY, currentX, currentY - 1, maze);
}
const moveRight = (maze) => {
    trySetPosition(currentX, currentY, currentX + 1, currentY, maze);
}
const moveDown = (maze) => {
    trySetPosition(currentX, currentY, currentX, currentY + 1, maze);
}
const moveLeft = (maze) => {
    trySetPosition(currentX, currentY, currentX - 1, currentY, maze);
}

export const AllocentricMovementController = {
    name: 'Allocentric Movement Controller',
    methods: {
        moveUp,
        moveRight,
        moveDown,
        moveLeft
    },
    locations: ['center']
};