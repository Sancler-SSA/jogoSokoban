const distanciaSalto = 66;
const margirFix = 4;

const pieces = builGameBoard(NUM_ROWS, NUM_COLS);
const board = document.querySelector('.tabuleiro');

<<<<<<< HEAD
const player = createBoardPiece(pieces.player, 'player');
=======
const player = new Piece(pieces.player.x, pieces.player.y);
const playerElement =  createBoardPiece(player, 'player');



function createBoardPiece(piece, className) {
    piece.insertElementInto(className, board);

// const element =  createGameElement('div', className, board);

// element.style.top = calculaPosicao(piece.x);
// element.style.left = calculaPosicao(piece.y);

return piece.element;
>>>>>>> 27d5c3a199496eef4b56dc8a51af179b37c694aa

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);

    return piece;
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


