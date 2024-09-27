const distanciaSalto = 66;
const margirFix = 4;

const pieces = builGameBoard(NUM_ROWS, NUM_COLS);
const board = document.querySelector('.tabuleiro');

const player = new Piece(pieces.player.x, pieces.player.y);
const playerElement =  createBoardPiece(player, 'player');



function createBoardPiece(piece, className) {
    piece.insertElementInto(className, board);

// const element =  createGameElement('div', className, board);

// element.style.top = calculaPosicao(piece.x);
// element.style.left = calculaPosicao(piece.y);

return piece.element;


}

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next);
    }
})

function verifyPosition(position) {
    console.log(position);
    let { x, y } = position;
    return boardMap[x][y] !== '#';
}


function calculaPosicao(qtd) {

    return `${qtd * distanciaSalto + margirFix}px`;
}


