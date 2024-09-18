// builGameBoard(8, 8, rule1);
// builGameBoard(8, 8, rule2);

function builGameBoard(numberOfRows, numberOfcollumns, drowrule) {
    const game = document.getElementById("game");
    const board = document.createElement('div');
    board.classList.add('tabuleiro');
    console.log(game);

    // const board2 = document.getElementById('board2');
    // const M=8;
    // const N=8;
    // for(let k=0; k<M; k++) {
    // const row = document.createElement('div');
    // row.classList.add('row');

    // for(let i=0; i<N;i++) {
    // const celula = document.createElement('div');
    // celula.classList.add('cell');
    // row.append(celula);

    // if(i == 0 || i == N - 1 || k == 0 || k == M - 1){
    //     celula.classList.add('vazio');
    // }

    // if(i > 0 && i < 7 && k > 0 && k < 7) {
    //     celula.classList.add('vazio');
    // }

    for (let k = 0; k < numberOfRows; k++) {
        const row = document.createElement('div');
        row.classList.add('row');
        board.append(row);

        for (let i = 0; i < numberOfcollumns; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            row.append(celula);

            drowrule(celula, numberOfRows, numberOfcollumns, k, i);
        }
    }
    game.append(board);

    
}

function rule0(celula, numRows, numCols, k, i){ 
    if (k <= 4) {
        celula.classList.add('flag');
    }

} 


 function rule1(celula, numberOfRows, numberOfcollumns, k , i){
    if ( k == 0 || i == 0 || k == numberOfRows - 1 || i == numberOfcollumns -1)
        celula.classList.add('vazio');


 }

 function rule2(celula, numberOfRows, numberOfcollumns, k, i){
    if ( k == 0)
        celula.classList.add('vazio');
 }

 function rule3(celula, numberOfRows, numberOfcollumns, k, i){
    if ( i == 0){
        celula.classList.add('vazio');
    }
}
function rule4(celula, numberOfRows, numberOfcollumns, k, i){
    if ( k == 7){
        celula.classList.add('vazio');
}
}
function rule5(celula, numberOfRows, numberOfcollumns, k, i){
    if ( i == 5){
        celula.classList.add('vazio');
    }
}

function rule6(celula, numberOfRows, numberOfcollumns, k, i){
    if ( k == 4 || i == 4){
        celula.classList.add('vazio');
}
}
function rule7(celula, numberOfRows, numberOfcollumns, k, i){
    if ( i == 5 || k == 3){
        celula.classList.add('vazio');

    }
}
function rule8(celula, numberOfRows, numberOfcollumns, k, i){
    if ( k == 3 && i == 5){
        celula.classList.add('vazio');
    }
}
function rule9(celula, numberOfRows, numberOfcollumns, k, i){
    if ( i == k){
        celula.classList.add('vazio');
}
}
function rule10(celula, numberOfRows, numberOfcollumns, k, i){
    if ( k + i == numberOfRows - 1){
        celula.classList.add('vazio');
    }
}
function rule11(celula, numberOfRows, numberOfcollumns, k, i){
    if ( i % 2 ==0){
        celula.classList.add('vazio');
    }
}
function rule12(celula, numberOfRows, numberOfcollumns, k, i){
    if ( i % 2 == 1){
        celula.classList.add('vazio');
    }
}
function rule13(celula, numberOfRows, numberOfcollumns, k, i){
    if ( ! ( k == 0 || i == 0 || k == numberOfRows -1 || i == numberOfcollumns -1)) {
        celula.classList.add('vazio');
    }
}
function rule14(celula, numberOfRows, numberOfcollumns, k, i){
    if ( i == k || i + k == numberOfRows - 1){
        celula.classList.add('vazio');
    }
}
function rule15(celula, numberOfRows, numberOfcollumns, k, i){
    if( i < k && i + k == numberOfRows - 1){

    }
}

// builGameBoard(8, 8, rule0);
builGameBoard(8, 8, rule1);
// builGameBoard(8, 8, rule2);
// builGameBoard(8, 8, rule3);
// builGameBoard(8, 8, rule4);
// builGameBoard(8, 8, rule5);
// builGameBoard(8, 8, rule6);
// builGameBoard(8, 8, rule7);
// builGameBoard(8, 8, rule8);
// builGameBoard(8, 8, rule9);
// builGameBoard(8, 8, rule10);
// builGameBoard(8, 8, rule11);
// builGameBoard(8, 8, rule12);
// builGameBoard(8, 8, rule13);
// builGameBoard(8, 8, rule14);
// builGameBoard(8, 8, rule15);


