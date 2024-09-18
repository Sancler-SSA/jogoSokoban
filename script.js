let x = 3;
let y = 4;

const player = document.querySelector('.player');
console.log(player);

player.addEventListener("click", function(){
    alert("clicou no jogador");
})

window.addEventListener("keydown",function(event){
    // window.alert("pressionou tecla");
    console.log(event);
    console.log(event.code);
    console.log(event.ctrlKey);

    if(event.code == "ArrowDown");
        // console.log(event);

        if(event.code == "ArrowUp"){
        x += -1;
}

        if(event.code == "ArrowDown"){
        x += +1;
        }
        if(event.code == "ArrowLeft"){
        y += -1;
        }

        if(event.code == "ArrowRight"){
        y += +1;
        }
        console.log(x, y);
})


   