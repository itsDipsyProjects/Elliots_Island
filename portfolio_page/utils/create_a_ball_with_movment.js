
function init_ball_on_second_section(where_to_append, text_inside, what_type){
    let the_ball = document.createElement("div");
    the_ball.classList.add("the_ball_what_do_i_do");
    if(what_type === 2){
        the_ball.classList.remove("the_ball_what_do_i_do")
        the_ball.classList.add("the_ball_what_do_i_do2");
    }
    the_ball.innerHTML = `
        <div class="test">${text_inside}</div>
    `;
    where_to_append.append(the_ball)
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
    
}
function init_text_effect(which_element) {
    let distanceFactor = 1;
    let easingFactor = 0.001; // Adjust this value for desired easing effect

    let targetX = 0;
    let targetY = 0;

    if(which_element === document.querySelector("#logo_name") || which_element === document.querySelector(".test1") || which_element === document.querySelector(".test2") || which_element === document.querySelector(".test3")){
        distanceFactor = 1;
        easingFactor = 0.005; 
        targetX = 0;
        targetY = 0;
    }
   
   

    function updatePosition() {
        let currentX = parseFloat(getComputedStyle(which_element).transform.split(",")[4]) || 0;
        let currentY = parseFloat(getComputedStyle(which_element).transform.split(",")[5]) || 0;

        let deltaX = targetX - currentX;
        let deltaY = targetY - currentY;

        currentX += deltaX * easingFactor;
        currentY += deltaY * easingFactor;

        which_element.style.transform = `translate(${currentX}px, ${currentY}px)`;

        requestAnimationFrame(updatePosition);
    }

    which_element.addEventListener("mousemove", (event) => {
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        let ballRect = which_element.getBoundingClientRect();

        // Check if the mouse is inside the element
        if (
            mouseX >= ballRect.left &&
            mouseX <= ballRect.right &&
            mouseY >= ballRect.top &&
            mouseY <= ballRect.bottom
        ) {
            targetX = (mouseX - ballRect.left) - ballRect.width / 2;
            targetY = (mouseY - ballRect.top) - ballRect.height / 2;

            requestAnimationFrame(updatePosition);
        }
    });

    which_element.addEventListener("mouseleave", () => {
        targetX = 0;
        targetY = 0;

        requestAnimationFrame(updatePosition);
    });

    // Start the animation loop
    requestAnimationFrame(updatePosition);
}



if(localStorage.getItem("where") === "main"){
    init_ball_on_second_section(document.querySelector("#first_section_in_fourth_section"), "contact");
    init_text_effect(document.querySelector("#first_text"));
    init_text_effect(document.querySelector("#second_text"));
    init_text_effect(document.querySelector("#third_text"));
    init_text_effect(document.querySelector("#fourth_text"));
    init_text_effect(document.querySelector("#logo_name"));
    init_text_effect(document.querySelector(".test1"));
    init_text_effect(document.querySelector(".test2"));
    init_text_effect(document.querySelector(".test3"));
}    


if(localStorage.getItem("where") === "elliot"){

    init_text_effect(document.querySelector("#logo_name"));
    init_text_effect(document.querySelector(".test1"));
    init_text_effect(document.querySelector(".test2"));
    init_text_effect(document.querySelector(".test3"));
    init_text_effect(document.querySelector("footer h1"));
    init_ball_on_second_section(document.querySelector("#container_for_popup"), "Next Case", 2)
    document.querySelector(".the_ball_what_do_i_do2").addEventListener("click", () => {
        window.location.href = "../richochet/ricochet.html";
        localStorage.clear();
        localStorage.setItem("where", "ricochet")
    })
}

if(localStorage.getItem("where") === "ricochet"){
    init_ball_on_second_section(document.querySelector("#first_section_in_fourth_section"), "contact");
    init_text_effect(document.querySelector("#logo_name"));
    init_text_effect(document.querySelector(".test1"));
    init_text_effect(document.querySelector(".test2"));
    init_text_effect(document.querySelector(".test3"));
    init_text_effect(document.querySelector("#first_section h1"));
    init_text_effect(document.querySelector("#first_section p"));
}    




document.querySelector("#logo_name").addEventListener("click", () => {
    window.location.href = "../portfolio.html";
})


