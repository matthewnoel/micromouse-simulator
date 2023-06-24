import { moveUp, moveRight, moveDown, moveLeft, setPosition } from './mouse';

export const runMaze = (program, start) => {
    setPosition(start.x, start.y);
    for (const char of program) {
        console.log(char);
        switch (char) {
            case '^':
                moveUp();
                break;
            case '>':
                moveRight();
                break;
            case 'v':
                moveDown();
                break;
            case '<':
                moveLeft();
                break;
            default:
                break;
        }
    }    
};