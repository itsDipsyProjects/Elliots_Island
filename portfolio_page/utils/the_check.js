if(localStorage.getItem("clicked_on_my_work") !== undefined && localStorage.getItem("clicked_on_my_work") === "true"){
    localStorage.removeItem("clicked_on_my_work")
    
        if(window.innerWidth >= 1050){
            window.scrollTo({
                top: 1450,
                behavior: "smooth",
            });
        }
        if(window.innerWidth <= 1050){
            window.scrollTo({
                top: 1129,
                behavior: "smooth",
            });
        }
}

if(localStorage.getItem("clicked_on_about_me") !== undefined && localStorage.getItem("clicked_on_about_me") === "true"){
    localStorage.removeItem("clicked_on_about_me")
   
        if(window.innerWidth >= 1050){
            window.scrollTo({
                top: 1450,
                behavior: "smooth",
            });
        }
        if(window.innerWidth <= 1050){
            window.scrollTo({
                top: 1129,
                behavior: "smooth",
            });
        }
        if(window.innerWidth >= 1650){
            window.scrollTo({
                top: 1050,
                behavior: "smooth",
            });
        }
}


if(localStorage.getItem("clicked_on_contact") !== undefined && localStorage.getItem("clicked_on_contact") === "true"){
    localStorage.removeItem("clicked_on_contact")

        if(window.innerWidth >= 1050){
            window.scrollTo({
                top: 4550,
                behavior: "smooth",
            });
        }

        if(window.innerWidth <= 1050){
            window.scrollTo({
                top: 6550,
                behavior: "smooth",
            });
        }
}

