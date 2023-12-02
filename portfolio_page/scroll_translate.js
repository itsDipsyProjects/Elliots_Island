let top_row = document.querySelector("#top_row");
let bottom_row = document.querySelector("#bottom_row");
let incrementor = 0;
let demencrator = 0;
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

console.log("hello");
window.addEventListener("scroll", handleScroll)

function handleScroll() {
  // Get the current scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Compare current and previous scroll positions
  if (scrollTop > lastScrollTop) {
    top_row.style.transform = `translateX(${incrementor++}px)`;
    bottom_row.style.transform = `translateX(${demencrator--}px)`;
  } else if (scrollTop < lastScrollTop) {
    
    top_row.style.transform = `translateX(${incrementor--}px)`;
    bottom_row.style.transform = `translateX(${demencrator++}px)`;
  }

  // Update the last scroll position
  lastScrollTop = scrollTop;
}