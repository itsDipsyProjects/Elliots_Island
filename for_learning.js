const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 676

class Player {
    constructor(image, position, incrementor_for_frames) {
        this.image = image;
        this.position = position;
        this.incrementor_for_frames = incrementor_for_frames;
        this.width = image.width; 
        this.height = image.height;
    }

    draw() {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.image.width,
            this.image.height
        );
    }
}

let playerImage = new Image();
playerImage.src = "./assets/playerDown.png";
let player = new Player(playerImage, {x: 480, y:350})

let if_p_is_pressed = false;


let keys = {
    w: false,
    s: false,
    d: false,
    a: false,
    p:false
}

function init_movement(){
    window.addEventListener("keydown", (event) =>{
        switch(event.key){
            case "w":
                keys.w = true;
            break;
            case "s":
                keys.s = true;
            break;

            case "a":
                keys.a = true;
            break;
            case "d":
                keys.d = true;
            break;
            case "p":
                keys.p = true;
                if_p_is_pressed = true;
                console.log(if_p_is_pressed)
            break;
        }
    })

    window.addEventListener("keyup", (event) =>{
        switch(event.key){
            case "w":
                keys.w = false;
            break;
            case "s":
                keys.s = false;
            break;

            case "a":
                keys.a = false;
            break;
            case "d":
                keys.d = false;
            break;
            case "p":
                keys.p = false;
                if_p_is_pressed = true;
            break;
        }
    })
}

init_movement();

let background_postion = {x: -1000, y:-1000}; 
let background_image = new Image();
background_image.src = "../assets/gameMapImage.png"
let test_rectangle = {postion:{x:470, y:300}, width:50, height:50};

function gameLoop(){
    window.requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background_image, background_postion.x, background_postion.y);
    
    player.draw();
    
    if(if_p_is_pressed === false){
        console.log("if_p_is_pressed is false right now")
        ctx.fillRect(test_rectangle.postion.x, test_rectangle.postion.y, test_rectangle.width, test_rectangle.height);
    }
   

    
    if (keys.w) {
        background_postion.y += 2;
        test_rectangle.postion.y += 2;
    }

    if (keys.s) {
        background_postion.y -= 2;
        test_rectangle.postion.y -= 2;
    }

    if (keys.a) {
        background_postion.x += 2;
        test_rectangle.postion.x += 2;
    }

    if (keys.d) {
        background_postion.x -= 2;
        test_rectangle.postion.x -= 2;
    }

    // Draw or Clear Rectangle based on if_p_is_pressed
    if (if_p_is_pressed === false) {
        ctx.fillRect(test_rectangle.postion.x, test_rectangle.postion.y, test_rectangle.width, test_rectangle.height);
    }
}

gameLoop();
