const board2 = document.getElementById('board2');
const M=8;
const N=8;
for(let k=0; k<M; k++) {
const row = document.createElement('div');
row.classList.add('row');

for(let i=0; i<N;i++) {
const celula = document.createElement('div');
celula.classList.add('cell');
row.append(celula);

// if(i == 0 || i == N - 1 || k == 0 || k == M - 1){
//     celula.classList.add('vazio');
// }

if(i > 0 && i < 7 && k > 0 && k < 7) {
    celula.classList.add('vazio');
}
}
board2.append(row);
}

