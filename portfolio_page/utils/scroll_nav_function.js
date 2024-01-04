

document.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", (e) => {
        window.location.href = "../portfolio.html";
        if(li.innerHTML === "My work"){
            localStorage.setItem("clicked_on_my_work", "true");
            localStorage.removeItem("where")
            localStorage.setItem("where", "main")
        }
        if(li.innerHTML === "About me"){
            localStorage.setItem("clicked_on_about_me", "true");
            localStorage.removeItem("where")
            localStorage.setItem("where", "main")
        }
        if(li.innerHTML === "Contact"){
            localStorage.setItem("clicked_on_contact", "true");
            localStorage.removeItem("where")
            localStorage.setItem("where", "main")
        }
    })
})