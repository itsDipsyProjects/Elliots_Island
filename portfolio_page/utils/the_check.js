if(localStorage.getItem("clicked_on_my_work") !== undefined && localStorage.getItem("clicked_on_my_work") === "true"){
    localStorage.removeItem("clicked_on_my_work")
    window.scrollTo({
        top: 1530,
        behavior: "smooth",
    });
}

if(localStorage.getItem("clicked_on_about_me") !== undefined && localStorage.getItem("clicked_on_about_me") === "true"){
    localStorage.removeItem("clicked_on_about_me")
    window.scrollTo({
        top: 3060,
        behavior: "smooth",
    });
}


if(localStorage.getItem("clicked_on_contact") !== undefined && localStorage.getItem("clicked_on_contact") === "true"){
    localStorage.removeItem("clicked_on_contact")
    window.scrollTo({
        top: 5050,
        behavior: "smooth",
    });
}