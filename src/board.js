// import Piece from "./piece";

// import { lvl0, lvlI, lvlII } from "./levle.js";


export function string2BoardMap(level){
    const lines = level.trim().split('\n');
    console.log(lines);

    return lines;
}


// export const boardMap = [
    //     ["_", "_", "#", "#", "#", "#", "#"],
    //     ["#", "#", ".", ".", ".", ".", "#"],
    //     ["#", ".", ".", ".", "#", ".", ".", "#"],
    //     ["#", ".", "#", ".", "G", ".", ".", "#"],
    //     ["#", ".", ".", ".", "B", "#", ".", "#"],
    //     ["#", ".", "G", "B", "P", "B", "G", "#"],
    //     ["#", ".", ".", ".", ".", ".", "#", "#"],
    //     [" ", "#", "#", "#", "#", "#"]
    // ];
    
    
    
    
    export function builGameBoard(mapa) {
        const boardMap = string2BoardMap(mapa);
        const pieces = {
            boxes:[]
            
        };
        const NUM_ROWS = boardMap.length;
    
    const game = document.getElementById("game");
    const board = createGameElement('div', 'tabuleiro', game);
    
    let numberOfGoal = 0;
    
    for (let i = 0; i < NUM_ROWS; i++) {
        const row = createGameElement('div', 'row', board);
        board.append(row);
        const NUM_COLS = boardMap[i].length;
        
        for (let j = 0; j < NUM_COLS; j++) {
            const cell = createGameElement('div', 'cell', row);

            const char = boardMap[i][j];

            const position = { x: j, y: i };


            if (char === '#') cell.classList.add(['wall']);
            if (char === ' ') cell.classList.add(['vazio']);
            if (char === '_') cell.classList.add(['vazio']);
            if (char === 'G') {
                cell.classList.add('goal');
                numberOfGoal++;}
            if (char === 'B') cell.classList.add('box');
            if (char === 'P') pieces.player = position;
            if (char === 'B')
                 pieces.boxes.push (position);
                    }

    }

    return {
        pieces, numberOfGoal, boardMap
    };
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);
    return element;
}
