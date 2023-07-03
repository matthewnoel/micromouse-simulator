import { setPosition } from './mouse';
import { AllocentricMovementController } from './parts/allocentric-movement-controller'

export const runMaze = (program, maze, parts) => {
    const equippedParts = Object.values(parts);
    setPosition(maze.start.x, maze.start.y);
    for (const char of program) {
        console.log(char);
        switch (char) {
            case '^':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveUp(maze);
                break;
            case '>':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveRight(maze);
                break;
            case 'v':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveDown(maze);
                break;
            case '<':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveLeft(maze);
                break;
            default:
                break;
        }
    }    
};