const player = new Player(0, 0);
const celulas = document.querySelectorAll('.cell');
const playerElement = document.querySelector('.player');


const distanciaSalto = 66;
const margirFix = 4;

playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);




window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);
    if (verifyPosition(next)) {
        let K = next.x * 4 + next.y;
        player.moveTo(next, playerElement, celulas[K]);
    }
})
function Player(x, y) {
    this.x = x;
    this.y = y;
    this.nextPosition = function(keycode) {
        let { x, y } = player;
        if (keycode === "ArrowUp") x--;
        if (keycode === "ArrowDown") x++;
        if (keycode === "ArrowLeft") y--;
        if (keycode === "ArrowRight") y++;
        return { x, y };
    }
    this.moveTo = function(position, element, _parent) {
        let { x, y } = position;
        this.x = position.x;
        this.y = position.y;
        // parent.append(element);

        element.style.top = calculaPosicao(this.x);
        element.style.left = calculaPosicao(this.y);
    }
}
function verifyPosition(position) {
    console.log(position);
    let { x, y } = position;
    return x >= 0 && x < 4 && y >= 0 && y < 4;
}

function calculaPosicao(qtd) {
   
    return `${qtd * distanciaSalto + margirFix}px`;
}

console.log(calculaPosicao(0, 64) === "0px");
console.log(calculaPosicao(1, 64) === "64px");
console.log(calculaPosicao(2, 32) === "64px");
console.log(calculaPosicao(10, 60) === "600px");
console.log(calculaPosicao(-3, 45) === "-135px");









