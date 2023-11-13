const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1224;
canvas.height = 976;

let backGroundImage = new Image();
backGroundImage.src = "./assets/gameMapImage.png";

let playerImage = new Image();
playerImage.src = "./assets/playerDown.png";

class Background {
    constructor(image, position) {
        this.image = image;
        this.position = position;
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}

class Player {
    constructor(image, position) {
        this.image = image;
        this.position = position;
    }

    draw() {
        ctx.drawImage(
            this.image,
            0,
            0,
            playerImage.width / 4,
            playerImage.height,
            this.position.x,
            this.position.y,
            playerImage.width / 4,
            playerImage.height
        );
    }
}

let background = new Background(backGroundImage, { x: -870, y: -900 });
let player = new Player(playerImage, { x: 590, y: 600 });

let keys = {
    w: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
};


// TO-DO: skapa collision genom att skapa en 2D array av collision_map array varje 70 del av arrayen ska stoppas in i en ny array och pushah till 2D arrayen
let collision_2D_format = [];
console.log(collision_map_array);
for (let i = 0; i < collision_map_array.length;  i++) {
    if(i === 70){

    }
    
}

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    // movment should be here instad of outside it creates smoothness in frames 
    if (keys.w.pressed) {
        background.position.y += 1;
    }
    if (keys.s.pressed) {
        background.position.y -= 1;
    }
    if (keys.a.pressed) {
        background.position.x += 1;
    }
    if (keys.d.pressed) {
        background.position.x -= 1;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    background.draw();
    player.draw();
}

// Event listeners for keydown and keyup
window.addEventListener("keydown", (event) => {
    switch(event.key){
        case "w":
            keys.w.pressed = true
        break;
        case "s":
            keys.s.pressed = true
        break;
        case "a":
            keys.a.pressed = true
        break;
        case "d":
            keys.d.pressed = true
        break;
    }
});

window.addEventListener("keyup", (event) => {
    switch(event.key){
        case "w":
            keys.w.pressed = false
        break;
        case "s":
            keys.s.pressed = false
        break;
        case "a":
            keys.a.pressed = false
        break;
        case "d":
            keys.d.pressed = false
        break;
    }
});

gameLoop();
