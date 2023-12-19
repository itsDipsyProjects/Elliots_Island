let the_stop_value = false;


if(window.innerWidth <= 1104){
  the_stop_value = true;
}


let top_row = document.querySelector("#top_row");
let top_row_divs = document.querySelectorAll("#top_row div");
let bottom_row = document.querySelector("#bottom_row");
let bottom_row_divs = document.querySelectorAll("#bottom_row div");
let background = document.querySelector("#first_section");
let incrementorB;


top_row_divs.forEach(a_box => {
  a_box.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/portfolio_page/my_work_ex.html"
  })
})

bottom_row_divs.forEach(a_box => {
  a_box.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/portfolio_page/my_work_ex.html"
  });
 })


function getBackgroundPositionYAsNumber(element) {
  // Get the computed style of the element
  const computedStyle = window.getComputedStyle(element);

  // Extract the 'background-position-y' value from the computed style
  const backgroundPositionY = computedStyle.getPropertyValue('background-position-y');

  // Parse the value to a number
  const backgroundPositionYAsNumber = parseFloat(backgroundPositionY);

  // Check if the parsing was successful
  if (!isNaN(backgroundPositionYAsNumber)) {
    return backgroundPositionYAsNumber;
  } else {
    console.error("Failed to parse 'background-position-y' as a number.");
    return null;
  }
}

let backgroundPositionYValue = getBackgroundPositionYAsNumber(background);

if (backgroundPositionYValue !== null) {
  console.log("Background Position Y as Number:", backgroundPositionYValue);
}

incrementorB = backgroundPositionYValue;






let incrementor = 0;
let demencrator = 0;
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;





window.addEventListener("resize", (event) => {
  
  if(window.innerWidth <= 1104){
    the_stop_value = true;
    top_row.style.transform = `translate(0px)`;
    bottom_row.style.transform = `translate(0px)`;
  }
  else if(window.innerWidth >= 1104){
    the_stop_value = false;
    window.addEventListener("scroll", handleScroll)
  }

  console.log(window.innerWidth);

  if (window.innerWidth >= 1950 ) {
    
    incrementorB = -500;
    background.style.backgroundPositionY = `${incrementorB}px`;
  } 

  else if (window.innerWidth < 1950 && window.innerWidth > 1334) {
    
    incrementorB = -180;
    background.style.backgroundPositionY = `${incrementorB}px`;
  }

  else if (window.innerWidth <= 1334) {
    
    incrementorB = 0;
    background.style.backgroundPositionY = `${incrementorB}px`;
  }
});

window.addEventListener("scroll", handleScroll)


function handleScroll() {
  
  
  if(the_stop_value === true){
    window.removeEventListener("scroll", handleScroll);  
    top_row.style.transform = `translateX(0px)`;
    bottom_row.style.transform = `translateX(0px)`;
  }

  


  // Get the current scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Compare current and previous scroll positions
  if (scrollTop > lastScrollTop) {
    top_row.style.transform = `translateX(${incrementor += 0.5}px)`;
    bottom_row.style.transform = `translateX(${demencrator -= 0.5}px)`;
    if(incrementorB >= 0){
      incrementorB = 0;
      background.style.backgroundPositionY = `${incrementorB}`
    }
    else{
      background.style.backgroundPositionY = `${incrementorB -= 3}px`

    }
    


  } else if (scrollTop < lastScrollTop) {
    
    top_row.style.transform = `translateX(${incrementor -= 0.5}px)`;
    bottom_row.style.transform = `translateX(${demencrator += 0.5}px)`;
    if(incrementorB >= 0){
      incrementorB = 0;
      background.style.backgroundPositionY = `${incrementorB}`
    }
    else{
      background.style.backgroundPositionY = `${incrementorB += 3}px`

    }
    

  }

  
  if(the_stop_value === true){
    window.removeEventListener("scroll", handleScroll);  
    top_row.style.transform = `translateX(0px)`;
    bottom_row.style.transform = `translateX(0px)`;
  }

  // Update the last scroll position
  lastScrollTop = scrollTop;
}

