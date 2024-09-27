const distanciaSalto = 66;
const margirFix = 4;

const pieces = builGameBoard(NUM_ROWS, NUM_COLS);
const board = document.querySelector('.tabuleiro');

const player = new Piece(pieces.player.x, pieces.player.y);
const playerElement =  createGameElement('div', 'player', board);



function createBoardPiece(piece, className) {
    piece.insertElementInfo(className, board);

// const element =  createGameElement('div', className, board);

// element.style.top = calculaPosicao(piece.x);
// element.style.left = calculaPosicao(piece.y);

return piece.element;


}

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next, playerElement);
    }
})

function calculaPosicao(qtd) {

    return `${qtd * distanciaSalto + margirFix}px`;
}


function builGameBoard(numberOfRows, numberOfcollumns) {
    const pieces = {};

    const game = document.getElementById("game");
    const board = createGameElement('div', 'tabuleiro', game);
  

    for (let i = 0; i < numberOfRows; i++) {
        const row = createGameElement('div', 'row', board);
        board.append(row);

        for (let j = 0; j < numberOfcollumns; j++) {
            const cell = createGameElement('div', 'cell', row);

            const char = boardMap[i][j];


            if (char === '#') cell.classList.add(['wall']);
            if (char === 'G') cell.classList.add('goal');
            if (char === 'B') cell.classList.add('box');
            if (char === 'P') pieces.player = { x: i, y: j };

        }

    }
   
    return pieces;

}

