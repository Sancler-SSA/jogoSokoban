function rule0(celula, k, i){ 
    if (k <= 4) {
        celula.classList.add('empty');
    }
}
    builGameBoard(8, 8, rule0);


function builGameBoard(numberOfRows, numberOfcollumns, drowrule) {
    const game = document.getElementById("game");
    const board = document.createElement('div');
    board.classList.add('tabuleiro');


    for (let k = 0; k < numberOfRows; k++) {
        const row = document.createElement('div');
        row.classList.add('row');
        board.append(row);

        for (let i = 0; i <numberOfcollumns; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            row.append(celula);

            drowrule(celula, numberOfRows, numberOfcollumns, k, i);
        }
    }
    game.append(board);





const player = new Player(0, 0);
const celulas = document.querySelectorAll('.cell');
const playerElement = document.querySelector('.player');


const distanciaSalto = 66;
const margirFix = 4;

playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);



window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);
    
})

}
function verifyPosition(position) {
    console.log(position);
    let { x, y } = position;
    return x >= 0 && x < 4 && y >= 0 && y < 4;
}

function calculaPosicao(qtd) {
   
    return `${qtd * distanciaSalto + margirFix}px`;
}

// // console.log(calculaPosicao(0, 64) === "0px");
// // console.log(calculaPosicao(1, 64) === "64px");
// // console.log(calculaPosicao(2, 32) === "64px");
// // console.log(calculaPosicao(10, 60) === "600px");
// // console.log(calculaPosicao(-3, 45) === "-135px");




