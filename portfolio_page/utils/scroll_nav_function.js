

document.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", (e) => {
        window.location.href = "http://127.0.0.1:5500/portfolio_page/portfolio.html";
        if(li.innerHTML === "My work"){
            localStorage.setItem("clicked_on_my_work", "true");
        }
        if(li.innerHTML === "About me"){
            localStorage.setItem("clicked_on_about_me", "true");
        }
        if(li.innerHTML === "Contact"){
            localStorage.setItem("clicked_on_contact", "true");
        }
    })
})