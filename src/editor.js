import { setPosition } from './mouse';
import { AllocentricMovementController } from './parts/allocentric-movement-controller'

export const runMaze = (program, start, parts) => {
    const equippedParts = Object.values(parts);
    setPosition(start.x, start.y);
    for (const char of program) {
        console.log(char);
        switch (char) {
            case '^':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveUp();
                break;
            case '>':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveRight();
                break;
            case 'v':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveDown();
                break;
            case '<':
                if (!equippedParts.includes(AllocentricMovementController.name)) break;
                AllocentricMovementController.methods.moveLeft();
                break;
            default:
                break;
        }
    }    
};