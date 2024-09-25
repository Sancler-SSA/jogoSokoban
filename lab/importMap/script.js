const boardMap = [
    [ "#", "#", "#", "#", "#", "#", "#", "#" ],
    [ "#", ".", ".", ".", ".", ".", ".", "#" ],
    [ "#", ".", ".", ".", "#", ".", ".", "#" ],
    [ "#", ".", "#", "G", ".", ".", ".", "#" ],
    [ "#", ".", ".", "G", "B", "#", ".", "#" ],
    [ "#", ".", ".", "#", ".", "B", ".", "#" ],
    [ "#", ".", ".", "P", ".", ".", ".", "#" ],
    [ "#", "#", "#", "#", "#", "#", "#", "#" ]
];

const NUM_ROWS = mapa.lentgh;
const NUM_COLS = mapa[0].lentgh;


builGameBoard(NUM_ROWS, NUM_COLS);


playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);

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
          
    }
    
}











