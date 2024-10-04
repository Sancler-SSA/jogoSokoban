import { builGameBoard } from "./board.js";
import Piece from "./piece.js";
import { lvl0, lvlI, lvlII } from "./level.js";



const { boardMap, pieces, numberOfGoals } = builGameBoard(lvl0);
const board = document.querySelector('.tabuleiro');

console.log(boardMap);


const player = createBoardPiece(pieces.player, 'player');
const boxes = [];

function levantaPlaquinha() {
    alert("Oh! Vida, Oh! Ceus, Oh! Azar.");
}



for (let i = 0; i < pieces.boxes.length; i++) {
    let piece = createBoardPiece(pieces.boxes[i], 'caixa');
    boxes.push(piece);

}
function handlekeydownEvent(keycode) {
    const next = playerPieces.nextPosition(keycode);

    if (verifyPosition(next)) {
        playerPieces.moveTo(next);
    }
}


export function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);

    return piece;
}

window.addEventListener("keydown", function (event) {
    handlePieceMovement(event.code);
});

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
 * uma dada coordenada.
*/
function findBoxAtPosition(position) {
    return boxes.find((caixa) => caixa.x === position.x && caixa.y === position.y);

    // modificar linha(s) de código abaixo
}




/** Tarefa #2: modificar a função abaixo de forma a tratar tando a movimentação
 * do jogador quanto das caixas.
*/
function handlePieceMovement(keycode) {
    // Variável destinada ao pré-cálculo da posição do jogador
    const nextPlayerPosition = player.nextPosition(keycode);
    // (Modificar) Variável para detectar a "presença" de outra peça
    const caixa = findBoxAtPosition(nextPlayerPosition);

    // Implementar lógica caso encontre uma outra peça no caminho.
    if (caixa) {
        const nextCaixaPosition = caixa.nextPosition(keycode);
        const outraCaixa = findBoxAtPosition(nextCaixaPosition);

        const caixaCanMove = verifyPosition(nextCaixaPosition);


        if (caixaCanMove && !outraCaixa) {
            caixa.moveTo(nextCaixaPosition);
            player.moveTo(nextPlayerPosition);

            // const qtdCaixasCertas = contagemDeCaixaCorretas();

            // if (qtdCaixasCertas == numberOfGoal) {
            //     setTimeout(levantaPlaquinha, 300);
            // }

        }
        if (levelCompleted()) setTimeout(() => alert("Oh! Vida, Oh! Ceus, Oh! Azar."), 250);
    } else {
        // Faça as modificações que forem necessárias para manter o
        // funcionamento do jogo.
        if (verifyPosition(nextPlayerPosition)) {
            player.moveTo(nextPlayerPosition);
        }
    }
}


function levelCompleted() {
    let count = 0;

    for (let b = 0; b < boxes.length; b++) {
        const position = boxes[b]
        let { x: j, y: i } = position;

        console.log(i, j)
        if (boardMap[i][j] === 'G') count++;
    }


    return count == numberOfGoals;

}

export function verifyPosition(position) {
    console.log(position);
    let { x: j, y: i } = position;

    return boardMap[i][j] !== '#';
}
