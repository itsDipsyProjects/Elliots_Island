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

let house_enter_rect = { position: { x: 480, y: 250 }, width: 50, height: 50 };
let enter_back_outside = { position: { x: 500, y: 320 }, width: 50, height: 50 };
let enter_uppstairs = { position: { x: 690, y: -495 }, width: 50, height: 50 };
let enter_downstairs = { position: { x: 600, y: -505 }, width: 50, height: 50 };

let every_enter_rect = [];

every_enter_rect.push(house_enter_rect);
every_enter_rect.push(enter_back_outside);
every_enter_rect.push(enter_uppstairs);


let frameCount = 0;
let frameThreshold = 10;

let is_in_the_house = false;
let is_uppstairs = false;

// ... (your existing code)

let inside_house_image = new Image();
inside_house_image.src = "./assets/inne_i_huset.png";

let uppstairs_image = new Image();
uppstairs_image.src = "./assets/uppstairs.png";

let movables = [background, house_enter_rect, enter_back_outside, enter_uppstairs, enter_downstairs];

function gameLoop() {
    
    window.requestAnimationFrame(gameLoop);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let isMoving = keys.w.pressed || keys.s.pressed || keys.a.pressed || keys.d.pressed;
   

    // Adjusted collision rectangle drawing
   
    


    if (isMoving) {
        frameCount++;
        if (frameCount > frameThreshold) {
            player.incrementor_for_frames += 48;
            if (player.incrementor_for_frames >= player.image.width) {
                player.incrementor_for_frames = 0;
            }
            frameCount = 0;
        }
    } else {
        player.incrementor_for_frames = 0;
    }

    if (keys.w.pressed) {
        movables.forEach((a_movable) =>{
            a_movable.position.y += 2;
        });
        let playerUpImage = new Image();
        playerUpImage.src = "./assets/playerUp.png";
        player.image = playerUpImage;
    }

    if (keys.s.pressed) {
        movables.forEach((a_movable) =>{
            a_movable.position.y -= 2;
        });
        let playerUpImage = new Image();
        playerUpImage.src = "./assets/playerDown.png";
        player.image = playerUpImage;
    }

    if (keys.a.pressed) {
        movables.forEach((a_movable) =>{
            a_movable.position.x += 2;
        });
        let playerLeftImage = new Image();
        playerLeftImage.src = "./assets/playerLeft.png";
        player.image = playerLeftImage;
    }

    if (keys.d.pressed) {
        movables.forEach((a_movable) =>{
            a_movable.position.x -= 2;
        });
        let playerRightImage = new Image();
        playerRightImage.src = "./assets/playerRight.png";
        player.image = playerRightImage;
    }

    //enter inside
    
    
    if(is_in_the_house === false){

        ctx.fillStyle = "green";
        ctx.fillRect(house_enter_rect.position.x, house_enter_rect.position.y, house_enter_rect.width, house_enter_rect.height)

        if (
            player.position.x < house_enter_rect.position.x + house_enter_rect.width &&
            player.position.x + player.width > house_enter_rect.position.x &&
            player.position.y < house_enter_rect.position.y + house_enter_rect.height &&
            player.position.y + player.height > house_enter_rect.position.y
        ) {
            background.image = inside_house_image;
            background.position.x = -1750;
            background.position.y = -1560;
            is_in_the_house = true;
        }
    }
    
    // enter uppstairs
    
    if(is_in_the_house === true){

        if(is_uppstairs === false){
            ctx.fillStyle = "red";
            ctx.fillRect(enter_back_outside.position.x, enter_back_outside.position.y, enter_back_outside.width, enter_back_outside.height)
    
            ctx.fillStyle = "blue";
            ctx.fillRect(enter_uppstairs.position.x, enter_uppstairs.position.y, enter_uppstairs.width, enter_uppstairs.height)
            if (
                player.position.x < enter_uppstairs.position.x + enter_uppstairs.width &&
                player.position.x + player.width > enter_uppstairs.position.x &&
                player.position.y < enter_uppstairs.position.y + enter_uppstairs.height &&
                player.position.y + player.height > enter_uppstairs.position.y
            ) {
                background.image = uppstairs_image;
                background.position.x = -1500;
                background.position.y = -500;
                is_uppstairs = true;                
            }
        }

        if(is_uppstairs === true){
            ctx.fillStyle = "blue";
            ctx.fillRect(enter_downstairs.position.x, enter_downstairs.position.y, enter_downstairs.width, enter_downstairs.height)
            if (
                player.position.x < enter_downstairs.position.x + enter_downstairs.width &&
                player.position.x + player.width > enter_downstairs.position.x &&
                player.position.y < enter_downstairs.position.y + enter_downstairs.height &&
                player.position.y + player.height > enter_downstairs.position.y
            ) {
                background.image = inside_house_image;
                background.position.x = -2000;
                background.position.y = -770;
                is_uppstairs = false;                
            }
        }

        //Enter back outside

        if (
            player.position.x < enter_back_outside.position.x + enter_back_outside.width &&
            player.position.x + player.width > enter_back_outside.position.x &&
            player.position.y < enter_back_outside.position.y + enter_back_outside.height &&
            player.position.y + player.height > enter_back_outside.position.y
        ) {
            background.image = backGroundImage;
            background.position.x = -1000;
            background.position.y = -900;
            is_in_the_house = false;
        }

    }

   
    background.draw();
    player.draw();

}

// ... (your existing code)

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            keys.w.pressed = true;
            break;
        case "s":
            keys.s.pressed = true;
            break;
        case "a":
            keys.a.pressed = true;
            break;
        case "d":
            keys.d.pressed = true;
            break;
    }
});

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "w":
            keys.w.pressed = false;
            break;
        case "s":
            keys.s.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
        case "d":
            keys.d.pressed = false;
            break;
    }
});


gameLoop();
