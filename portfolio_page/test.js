const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 676



let if_p_is_pressed = false;


let keys = {
    w: false,
    s: false,
    d: false,
    a: false,
    p:false
}
function movement(){
    window.addEventListener("keydown", (event) =>{
        switch(event.key){
            case "w":
                keys.w = true;
                console.log("yes")
            break;
            case "s":
                keys.s = true;
            break;
            case "p":
                keys.p = true;
                if_p_is_pressed = true
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
            case "p":
                keys.p = false;
            break;
        }
    })
}

movement();


let background_postion = {x: 0, y:0}; 
let background_image = new Image();
background_image.src = "../assets/gameMapImage.png"
let test_rectangle = {postion:{x:470, y:300}, width:50, height:50};

function gameLoop(){
    window.requestAnimationFrame(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background_image, background_postion.x, background_postion.y);
    
    if(if_p_is_pressed === false){
        ctx.fillRect(test_rectangle.postion.x, test_rectangle.postion.y, test_rectangle.width, test_rectangle.height);
    }
   

    
    if (keys.w) {
        background_postion.y -= 1;
    }

    if (keys.s) {
        background_postion.y += 1;
    }

    if (keys.p) {
        ctx.clearRect(test_rectangle.postion.x, test_rectangle.postion.y, test_rectangle.width, test_rectangle.height);
    }
}

gameLoop();

