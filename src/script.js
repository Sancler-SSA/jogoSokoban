import { builGameBoard, boardMap, createGameElement} from "./board.js";
import Piece from "./piece.js";

const pieces = builGameBoard();
const board = document.querySelector('.tabuleiro');

console.log(pieces);

const playerPieces = createBoardPiece(pieces.player, 'player');
    
    

export function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);

    return piece;
}

for (let i = 0;  i < pieces.boxes.length; i ++) {
    createBoardPiece( pieces.boxes [i], 'caixa');
    
}




window.addEventListener("keydown", function (event) {
    const next = playerPieces.nextPosition(event.code);

    if (verifyPosition(next)) {
        playerPieces.moveTo(next);
    }
})

function verifyPosition(position) {
    console.log(position);
    let { x: j, y: i }  = position;

    return boardMap[i ][j] !== '#';
}




