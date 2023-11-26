let intro_text = document.querySelector("#intro_text");
let counter_down = 0;

function test() {
  window.requestAnimationFrame(test);
  console.log(counter_down)
  if(counter_down !== -2000 && counter_down <= 0){
    // Adjust the animation speed by changing the decrement value
    counter_down = counter_down - 2; // or any other value based on your preference
  
    // Use units for the translate value (e.g., px)
    intro_text.style.transform = `translateX(${counter_down}px)`;

  }

  if(counter_down <= -2000){
    counter_down = 2500;
  }

  if(counter_down <= 2500 && counter_down !== 0){
    counter_down = counter_down - 2; // or any other value based on your preference
  
    // Use units for the translate value (e.g., px)
    intro_text.style.transform = `translateX(${counter_down}px)`;
  }
}

test();