import { builGameBoard } from "./board.js";
import { lvl0, lvlI, lvlII } from "./level.js";

const { boardMap, pieces: { player, boxes }, numberOfGoals } = builGameBoard(lvl0);

window.addEventListener("keydown", function (event) {
    handlePieceMovement(event.code);
});

function findBoxAtPosition(position) {
    return boxes.find((caixa) => caixa.x === position.x && caixa.y === position.y);
}

function handlePieceMovement(keycode) {
    const nextPlayerPosition = player.nextPosition(keycode);
    const caixa = findBoxAtPosition(nextPlayerPosition);

    if (caixa) {
        const nextCaixaPosition = caixa.nextPosition(keycode);
        const outraCaixa = findBoxAtPosition(nextCaixaPosition);

        const caixaCanMove = verifyPosition(nextCaixaPosition);

        if (caixaCanMove && !outraCaixa) {
            caixa.moveTo(nextCaixaPosition);
            player.moveTo(nextPlayerPosition);
        }

        if (levelCompleted()) {
            setTimeout(() => alert("Oh! Vida, Oh! Ceus, Oh! Azar."), 250);
        }
    } else {
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
