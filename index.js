

const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


let boundaries = [];

class player{
    constructor({posistion}){
        this.posistion = posistion;
        this.width = 60
        this.height = 60;
    }

    
    draw(){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.posistion.x, this.posistion.y , this.width, this.height);
    }
}


class Boundary {
    constructor({posistion}){
        this.posistion = posistion;
        this.width = 60;
        this.height = 60;
    }

    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.posistion.x, this.posistion.y , this.width, this.height);
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
        x: -1530,
        y: -1220,
    }
    
    mapArr_2D.forEach((row, i) => {
        row.forEach((symbol, j) => { 
            if (symbol === 58) {
                boundaries.push(
                    new Boundary({
                        posistion:{
                            x: j * 65 + offset.x,
                            y: i * 65 + offset.y,
                        },
                    })
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

let player1 = new player({posistion: {
    x: player_cordinates.x,
    y: player_cordinates.y,
}})

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
            lastkeyPress = "w";
        break;
        case "s":
            keys_pressed.s = true;
            lastkeyPress = "s";
        break;
        case "a":
            keys_pressed.a = true;
            lastkeyPress = "a";
        break;
        case "d":
            keys_pressed.d = true;
            lastkeyPress = "d";
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

let collisionDection = false;

fix_collision();
let movables = [backgroundImage_cordinates, ...boundaries]
console.log(movables);

let lastkeyPress =  "";

let collisionDetectedAxis = {
    xplus: false,
    xminus: false,
    yplus: false,
    yminus: false,
}

let test_boundary = new Boundary({posistion: {x: 500, y: 500}});
function gameLoop(){
    requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, backgroundImage_cordinates.x, backgroundImage_cordinates.y);
    
    test_boundary.draw();
    
    console.log(collisionDetectedAxis);
    if((keys_pressed.w && keys_pressed.s) || (keys_pressed.s && keys_pressed.w) === false)
    {
        
        if (keys_pressed.w) {
            movables.forEach((movable) => {
                movable.y += 3;
            });
        }
    
        if (keys_pressed.s) {
            console.log("true")
            movables.forEach((movable) => {
                movable.y -= 3;
            });
        }

        if (keys_pressed.a) {
            console.log("true")
            movables.forEach((movable) => {
                movable.x += 3;
            });
        }

        if (keys_pressed.d) {
            console.log("true")
            movables.forEach((movable) => {
                movable.x -= 3;
            });
        }
    }

    
    

    player1.draw();
    collisionDection = false;

    if(collisionDection === false){
        collisionDetectedAxis.yplus = false;
        collisionDetectedAxis.yminus = false;
        collisionDetectedAxis.xplus = false;
        collisionDetectedAxis.xminus = false;
    }
}

gameLoop();


