const distanciaSalto = 66;
const margirFix = 4;
const NUM_ROWS = 8;
const NUM_COLS = 8;

builGameBoard(NUM_ROWS, NUM_COLS);

const player = new Player(0, 0);
const playerElement = document.querySelector('.player');

playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next, playerElement);
    }
})

function Player(x, y) {
    this.x = x;
    this.y = y;
    this.nextPosition = function (keycode) {
        let { x, y } = player;
        if (keycode === "ArrowUp") x--;
        if (keycode === "ArrowDown") x++;
        if (keycode === "ArrowLeft") y--;
        if (keycode === "ArrowRight") y++;
        return { x, y };
    }
    this.moveTo = function (position, element) {
        let { x, y } = position;
        this.x = position.x;
        this.y = position.y;

        element.style.top = calculaPosicao(this.x);
        element.style.left = calculaPosicao(this.y);
    }
}

function verifyPosition(position) {
    console.log(position);
    let { x, y } = position;
    return x >= 0 && x < NUM_ROWS && y >= 0 && y < NUM_COLS;
}

function calculaPosicao(qtd) {

    return `${qtd * distanciaSalto + margirFix}px`;
}

function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);
    return element;
}

function builGameBoard(numberOfRows, numberOfcollumns) {
    const game = document.getElementById("game");
    const board = createGameElement('div', 'tabuleiro', game);
   
    
    for (let k = 0; k < numberOfRows; k++) {
        const row = createGameElement('div', 'row', board);
        board.append(row);

        for (let i = 0; i < numberOfcollumns; i++) {
            const celula = createGameElement('div', 'cell', row);
            row.append(celula);
        }
    }
    createGameElement('div', 'player', board);

}

