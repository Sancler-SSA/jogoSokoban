unction builGameBoard(numberOfRows, numberOfcollumns) {
    const pieces = {};

    const game = document.getElementById("game");
    const board = createGameElement('div', 'tabuleiro', game);
    // const pieces = createGameElement('div', 'player', board);

    for (let i = 0; i < numberOfRows; i++) {
        const row = createGameElement('div', 'row', board);
        board.append(row);

        for (let j = 0; j < numberOfcollumns; j++) {
            const cell = createGameElement('div', 'cell', row);

            const char = boardMap[i][j];


            if (char === '#') cell.classList.add(['wall']);
            if (char === 'G') cell.classList.add('goal');
            if (char === 'B') cell.classList.add('box');
            if (char === 'P') pieces.player = { x: i, y: j };

        }

    }