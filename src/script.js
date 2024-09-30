import { builGameBoard, boardMap, createGameElement} from "./board.js";
import Piece from "./piece.js";

const pieces = builGameBoard();
const board = document.querySelector('.tabuleiro');

console.log(pieces);

const playerPieces = createBoardPiece(pieces.player, 'player');
const boxes = [];

for (let box of pieces.boxes){
    createBoardPiece(pieces.block[i],'block');
}
    
    

export function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);

    return piece;
}

function handlekeydownEvent(keycode){
    const next = playerPieces.nextPosition(event.code);

    if (verifyPosition(next)) {
        playerPieces.moveTo(next);
    }
}



for (let i = 0;  i < pieces.boxes.length; i ++) {
    createBoardPiece( pieces.boxes [i], 'caixa');
    
}


window.addEventListener("keydown", function (event) {
    

function verifyPosition(position) {
    console.log(position);
    let { x: j, y: i }  = position;

    return boardMap[i ][j] !== '#';
}
}



