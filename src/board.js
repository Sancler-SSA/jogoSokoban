import Piece from "./piece.js";

export function builGameBoard(mapa) {
    const boardMap = mapa.trim().split('\n');
    const pieces = {
        boxes: []

    };
    const NUM_ROWS = boardMap.length;

    const game = document.getElementById("game");
    const board = createGameElement('div', 'tabuleiro', game);

    let numberOfGoals = 0;

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
            // if (char === 'B') cell.classList.add('box');
            // if (char === 'P') pieces.player = position;
            // if (char === 'B')
            //     pieces.boxes.push(position);
            if (char === 'P') pieces.player = createBoardPiece(position, 'player');
            if (char === 'B') pieces.boxes.push(createBoardPiece(position, 'caixa'));
            if (char === 'G') {
                cell.classList.add('goal');
                numberOfGoals++;
            }
            
        }

    }

    return {
        pieces, numberOfGoals, boardMap
    };
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);
    return element;
}

function createBoardPiece(piecePosition, className) {
    const board = document.querySelector('.tabuleiro');
    const piece = new Piece(piecePosition.x, piecePosition.y);
    
    piece.insertElementInto(className, board);
    return piece;
}