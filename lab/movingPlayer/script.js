const player = new Player(0, 0);

const playerElement = document.querySelector('.player');


const distanciaSalto = 66;
const margirFix = 4;

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
    this.nextPosition = function(keycode) {
        let { x, y } = player;
        if (keycode === "ArrowUp") x--;
        if (keycode === "ArrowDown") x++;
        if (keycode === "ArrowLeft") y--;
        if (keycode === "ArrowRight") y++;
        return { x, y };
    }
    this.moveTo = function(position, element) {
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

