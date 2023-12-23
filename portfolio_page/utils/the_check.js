if(localStorage.getItem("clicked_on_my_work") !== undefined && localStorage.getItem("clicked_on_my_work") === "true"){
    localStorage.removeItem("clicked_on_my_work")
    document.querySelector("#second_section").scrollIntoView({
        behavior:"smooth"
    });
}

if(localStorage.getItem("clicked_on_about_me") !== undefined && localStorage.getItem("clicked_on_about_me") === "true"){
    localStorage.removeItem("clicked_on_about_me")
    document.querySelector("#third_section").scrollIntoView({
        behavior:"smooth"
    });
       
}


if(localStorage.getItem("clicked_on_contact") !== undefined && localStorage.getItem("clicked_on_contact") === "true"){
    localStorage.removeItem("clicked_on_contact")
    document.querySelector("#fourth_section").scrollIntoView({
        behavior:"smooth"
    });
        
}

