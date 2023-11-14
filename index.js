const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 676;

let backGroundImage = new Image();
backGroundImage.src = "./assets/gameMapImage.png";

let restingPlayerImage = new Image();
restingPlayerImage.src = "./assets/playerDown.png";

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
    
    
    
    constructor(image, position, incrementor_for_frames) {
        this.image = image;
        this.position = position;
        this.incrementor_for_frames = incrementor_for_frames;
    }
    
    draw() {
        ctx.drawImage(
            this.image,
            0 + this.incrementor_for_frames,
            0,
            this.image.width / 4,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / 4,
            this.image.height
        );
    }
}


let starting_posistion_for_player = { x: 490, y: 350 };
let starting_posistion_for_background = { x: -970, y: -900 };

let background = new Background(backGroundImage, starting_posistion_for_background);

let player = new Player(restingPlayerImage, starting_posistion_for_player, 0);



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


// // TO-DO: skapa collision genom att skapa en 2D array av collision_map array varje 70 del av arrayen ska stoppas in i en ny array och pushah till 2D arrayen
// let collision_2D_format = [];
// console.log(collision_map_array);
// for (let i = 0; i < collision_map_array.length;  i++) {
//     if(i === 70){

//     }
    
// }






let playerUpImage = new Image();
playerUpImage.src = "./assets/playerUp.png";
  


function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // movment should be here instad of outside it creates smoothness in frames 
    if (keys.w.pressed) {
        background.position.y += 2;
        let playerUpImage = new Image();
        playerUpImage.src = "./assets/playerUp.png";
        player.image = playerUpImage;
        if(player.incrementor_for_frames >= 192){
            player.incrementor_for_frames += 48;
        }
        else{
            player.incrementor_for_frames = 0 ;
        }
    }

    if (keys.s.pressed) {
        background.position.y -= 2;
        let playerUpImage = new Image();
        playerUpImage.src = "./assets/playerDown.png";
        player.image = playerUpImage;
        
    }

    if (keys.a.pressed) {
        background.position.x += 2;
        let playerLeftImage = new Image();
        playerLeftImage.src = "./assets/playerLeft.png";
        player.image = playerLeftImage;
        
    }

    if (keys.d.pressed) {
        background.position.x -= 2;
        let playerRightImage = new Image();
        playerRightImage.src = "./assets/playerRight.png";
        player.image = playerRightImage;
    }
    
    
    
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
