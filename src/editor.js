import { setPosition } from './mouse';
import { AllocentricMovementController } from './parts/allocentric-movement-controller'

export const runMaze = (program, maze, parts) => {
    const equippedParts = Object.values(parts);
    setPosition(maze.start.x, maze.start.y);
    for (const line of program) {
        switch (line.value) {
            case 'Allocentric Movement Controller -> moveUp':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveUp.func(maze);
                break;
            case 'Allocentric Movement Controller -> moveRight':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveRight.func(maze);
                break;
            case 'Allocentric Movement Controller -> moveDown':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveDown.func(maze);
                break;
            case 'Allocentric Movement Controller -> moveLeft':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveLeft.func(maze);
                break;
            default:
                break;
        }
    }
};