const board2 = document.getElementById('board2');

const row = document.createElement('div');
row.classList.add('row');


for(let i=0; i<4;i++) {
const celula = document.createElement('div');
celula.classList.add('cell');

row.append(celula);

}

board2.append(row);