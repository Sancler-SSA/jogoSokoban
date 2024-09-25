const boardMap = [
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", ".", ".", "#", ".", ".", "#"],
    ["#", ".", "#", "G", ".", ".", ".", "#"],
    ["#", ".", ".", "G", "B", "#", ".", "#"],
    ["#", ".", ".", "#", ".", "B", ".", "#"],
    ["#", ".", ".", "P", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"]
];



const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

builGameBoard(NUM_ROWS, NUM_COLS);

function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);
    return element;
}

function builGameBoard(numberOfRows, numberOfcollumns) {
    const game = document.getElementById("game");
    const board = createGameElement('div', 'tabuleiro', game);
    console.log (numberOfRows)

    for (let i = 0; i < numberOfRows; i++) {
        const row = createGameElement('div', 'row', board);
        board.append(row);

        for (let j = 0; j < numberOfcollumns; j++) {
            const celula = createGameElement('div', 'cell', row);
            const char = boardMap[i][j];
            // console.log(char);

            // if (char === '#') celula.classList.add('wall');

        }

    }
}