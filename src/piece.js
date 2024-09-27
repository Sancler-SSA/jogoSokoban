
function Piece(x, y) {
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

    this.insertElementInto = function(className, parent){
        this.element =  createGameElement('div', className, parent);

        this.element.style.top = calculaPosicao(this.x);
        this.element.style.left = calculaPosicao(this.y);


    }
}

function verifyPosition(position) {
    console.log(position);
    let { x, y } = position;
    return boardMap[x][y] !== '#';
}

