import { builGameBoard, boardMap} from "./board.js";
import Piece from "./piece.js";

const pieces = builGameBoard();
const board = document.querySelector('.tabuleiro');

const player = createBoardPiece(pieces.player, 'player');

export function createBoardPiece(piecePosition, className) {
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




