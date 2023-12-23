window.addEventListener("resize", () =>{
    if(window.innerWidth <= 1000){
        document.querySelector("#second_section h1").innerHTML = "Free pixel game engine";   
    }
    else{
        document.querySelector("#second_section h1").innerHTML = `What is &lt;Richochet&gt;`;
    }
})
