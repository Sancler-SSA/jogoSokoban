function Player(X, Y){
    this.x = X;
    this.y = Y;
}

const player = new Player(3, 4);
console.log(player);

const playerElement = document.querySelector('.player');
console.log(player);

playerElement.addEventListener("click", function(){
    alert("clicou no jogador");
})

window.addEventListener("keydown",function(event){
    nextPosition(event.code);
    // window.alert("pressionou tecla");
    // console.log(event);
    // console.log(event.code);
    // console.log(event.ctrlKey);

    // if(event.code == "ArrowDown");
        // console.log(event);

       
})

   function nextPosition(keycode){

    if(keycode == "ArrowUp")player.x --;
    if(keycode == "ArrowDown")player.x ++;
    if(keycode == "ArrowLeft")player.y --;
    if(keycode == "ArrowRight")player.y ++;

        console.log(keycode, player);

   }
