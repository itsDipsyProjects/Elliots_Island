let top_row = document.querySelector("#top_row");
let bottom_row = document.querySelector("#bottom_row");

let background = document.querySelector("#first_section");
let incrementorB;

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

console.log(incrementorB)





let incrementor = 0;
let demencrator = 0;
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

console.log("hello");



window.addEventListener("resize", (event) => {
  console.log(window.innerWidth);

  if (window.innerWidth >= 1950 ) {
    console.log("yes");
    incrementorB = -500;
    background.style.backgroundPositionY = `${incrementorB}px`;
  } 

  else if (window.innerWidth < 1950 && window.innerWidth > 1334) {
    console.log("no");
    incrementorB = -180;
    background.style.backgroundPositionY = `${incrementorB}px`;
  }

  else if (window.innerWidth <= 1334) {
    console.log("no2");
    incrementorB = 0;
    background.style.backgroundPositionY = `${incrementorB}px`;
  }
});

window.addEventListener("scroll", handleScroll)


function handleScroll() {
 
  console.log(incrementorB)


  // Get the current scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Compare current and previous scroll positions
  if (scrollTop > lastScrollTop) {
    top_row.style.transform = `translateX(${incrementor += 0.5}px)`;
    bottom_row.style.transform = `translateX(${demencrator -= 0.5}px)`;
    background.style.backgroundPositionY = `${incrementorB -= 2}px`
   
    if(incrementorB >= 0){
      incrementorB = 0;
      background.style.backgroundPositionY = `${incrementorB}`
    }


  } else if (scrollTop < lastScrollTop) {
    
    top_row.style.transform = `translateX(${incrementor -= 0.5}px)`;
    bottom_row.style.transform = `translateX(${demencrator += 0.5}px)`;
    background.style.backgroundPositionY = `${incrementorB += 2}px`
    
    if(incrementorB >= 0){
      incrementorB = 0;
      background.style.backgroundPositionY = `${incrementorB}`
    }

  }

  // Update the last scroll position
  lastScrollTop = scrollTop;
}