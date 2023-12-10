

const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


let boundaries = [];

class player{
    constructor(posistion){
        this.posistion = posistion;
        this.width = 60
        this.height = 60;
    }

    
    draw(){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.posistion.x, this.posistion.y , this.width, this.height);
    }
}


class Boundary{
    constructor(x,y){
        this.x = x;
        this.y = y
        this.width = 60;
        this.height = 60;
    }

    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y , this.width, this.height);
    }
}

canvas.width = 1200;
canvas.height = 1000;
// Draw background

let backgroundImage = new Image();
backgroundImage.src = "./test.png";

// draws out collision blocks
function fix_collision(){    
    
    let mapArr_2D = [];
    
    for (let i = 0; i < mapArr.length; i += 70) {
        let sliced_part = mapArr.slice(i, i + 70);
        mapArr_2D.push(sliced_part);
    }



    const offset = {
        x: -1400,
        y: -1100,
    }
    
    mapArr_2D.forEach((row, i) => {
        row.forEach((symbol, j) => { 
            if (symbol === 58) {
                boundaries.push(
                    new Boundary(
                        j * 60 + offset.x,
                        i * 60 + offset.y,
                    )
                )
            }
        });
    });
    
}

let player_cordinates = {
    x: 580,
    y: 540,
}

let backgroundImage_cordinates = {
    x: -1500,
    y: -1200,
}

let player1 = new player(player_cordinates)

let keys_pressed = {
    w: false,
    s: false,
    a: false,
    d: false,
}

window.addEventListener("keydown", (event) => {
    switch(event.key){
        case "w":
            keys_pressed.w = true;
            
        break;
        case "s":
            keys_pressed.s = true;
        break;
        case "a":
            keys_pressed.a = true;
        break;
        case "d":
            keys_pressed.d = true;
        break;
    }
})


window.addEventListener("keyup", (event) => {
    switch(event.key){
        case "w":
            keys_pressed.w = false;
        break;
        case "s":
            keys_pressed.s = false;
        break;
        case "a":
            keys_pressed.a = false;
        break;
        case "d":
            keys_pressed.d = false;
        break;
    }
})


fix_collision();
let movables = [backgroundImage_cordinates, ...boundaries]
console.log(movables);




function gameLoop(){
    requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, backgroundImage_cordinates.x, backgroundImage_cordinates.y);
    boundaries.forEach((a_boundary) =>{
        a_boundary.draw();
    })
    


    if(keys_pressed.w){
        movables.forEach((movable) => {
            movable.y += 3;
        })
        
    }

    if(keys_pressed.s){
        movables.forEach((movable) => {
            movable.y -= 3;
        })
    }


    if(keys_pressed.a){
        movables.forEach((movable) => {
            movable.x += 3;
        })
        
    }

    if(keys_pressed.d){
        movables.forEach((movable) => {
            movable.x -= 3;
        })
    }

    player1.draw();
}

gameLoop();


