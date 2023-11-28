
function init_ball_on_second_section(where_to_append){
    let the_ball = document.createElement("div");
    the_ball.classList.add("the_ball_what_do_i_do");

    the_ball.innerHTML = `
        <div class="test">About me</div>
    `;
    where_to_append.appendChild(the_ball)
    let test1 = document.querySelector(".test");
    let distanceFactor = 5;
    
    the_ball.addEventListener("mousemove", (event) => {    
        let mouseX = event.clientX;
        let mouseY = event.clientY;
    
        let ballRect = the_ball.getBoundingClientRect();
    
        // Check if the mouse is inside the ball
        if (mouseX >= ballRect.left && mouseX <= ballRect.right &&
            mouseY >= ballRect.top && mouseY <= ballRect.bottom) {
    
            let ballCenterX = ballRect.left + ballRect.width / 2;
            let ballCenterY = ballRect.top + ballRect.height / 2;
    
            let ballDeltaX = mouseX - ballCenterX;
            let ballDeltaY = mouseY - ballCenterY;
    
            let ballNewValueX = ballDeltaX / distanceFactor;
            let ballNewValueY = ballDeltaY / distanceFactor;
    
            // Apply transformations only if the mouse is inside the ball
            the_ball.style.transform = `translate(${ballNewValueX}px, ${ballNewValueY}px)`;
    
            // Calculate distance for test1
            let elementRect = the_ball.getBoundingClientRect();
            let elementCenterX = elementRect.left + elementRect.width / 2;
            let elementCenterY = elementRect.top + elementRect.height / 2;
    
            let deltaX = mouseX - elementCenterX;
            let deltaY = mouseY - elementCenterY;
    
            let new_value_x = deltaX / distanceFactor;
            let new_value_y = deltaY / distanceFactor;
    
            // Apply transformations only if the mouse is inside the ball
            test1.style.transform = `translate(${new_value_x}px, ${new_value_y}px)`;
        }
    });

    the_ball.addEventListener("mouseleave", (event) => {   
        the_ball.style.transform = `translate(${0}px, ${0}px)`; 
        test1.style.transform = `translate(${0}px, ${0}px)`;
    });
    
    the_ball.addEventListener("click", (event) => {    
        
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        
    });
}



