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
        this.width = image.width / 4; // Assuming the sprite sheet has 4 frames
        this.height = image.height;
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






let house_enter_rect = {position: {x: 490, y: 290}, width: 50, height:50};  


let frameCount = 0;
let frameThreshold = 10;

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Check if any movement key is pressed
    let isMoving = keys.w.pressed || keys.s.pressed || keys.a.pressed || keys.d.pressed;

    // Update player frame only when moving
    if (isMoving) {
        frameCount++;
        if (frameCount > frameThreshold) {
            player.incrementor_for_frames += 48;
            if (player.incrementor_for_frames >= player.image.width) {
                player.incrementor_for_frames = 0;
            }
            frameCount = 0; // Reset frame count
        }
    } else {
        // Reset player frame to default when not moving
        player.incrementor_for_frames = 0;
    }

    // Movement logic
    if (keys.w.pressed) {
        background.position.y += 2;
        house_enter_rect.position.y += 2;
        let playerUpImage = new Image();
        playerUpImage.src = "./assets/playerUp.png";
        player.image = playerUpImage;
    }

    if (keys.s.pressed) {
        background.position.y -= 2;
        house_enter_rect.position.y -= 2;
        let playerUpImage = new Image();
        playerUpImage.src = "./assets/playerDown.png";
        player.image = playerUpImage;
    }

    if (keys.a.pressed) {
        background.position.x += 2;
        house_enter_rect.position.x += 2;
        let playerLeftImage = new Image();
        playerLeftImage.src = "./assets/playerLeft.png";
        player.image = playerLeftImage;
    }

    if (keys.d.pressed) {
        background.position.x -= 2;
        house_enter_rect.position.x -= 2;
        let playerRightImage = new Image();
        playerRightImage.src = "./assets/playerRight.png";
        player.image = playerRightImage;
    }

    // Drawing the background, player, and collision rectangle

    background.draw();
    
    ctx.fillStyle = "red";
    ctx.fillRect(house_enter_rect.position.x, house_enter_rect.position.y, house_enter_rect.width, house_enter_rect.height);
 
    

    // Collision detection
    if( player.position.x + player.width > house_enter_rect.position.x && 
        player.position.x < house_enter_rect.position.x + house_enter_rect.width &&
        player.position.y + player.height > house_enter_rect.position.y && 
        player.position.y < house_enter_rect.position.y + house_enter_rect.height)
        
    {
        
        console.log("in the house");
        let inside_house_image = new Image();
        inside_house_image.src = "./assets/inne_i_huset.png"
        background.image = inside_house_image
        background.position.x = -1950
        background.position.y = -1000

    }
    
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
