const distanciaSalto = 66;
const margirFix = 4;

const pieces = builGameBoard(NUM_ROWS, NUM_COLS);
const board = document.querySelector('.tabuleiro');

const player = createBoardPiece(pieces.player, 'player');

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


