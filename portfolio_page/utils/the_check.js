if(localStorage.getItem("clicked_on_my_work") !== undefined && localStorage.getItem("clicked_on_my_work") === "true"){
    localStorage.removeItem("clicked_on_my_work")
     /*
        TODO: 
        Här måste jag kolla olika skärm stolekar med window.innerWidth för att förstå vart den ska
        ska scrolla till i pixlar för det ändras när man schyssterar skärmen.
    */
    window.scrollTo({
        top: 1530,
        behavior: "smooth",
    });
}

if(localStorage.getItem("clicked_on_about_me") !== undefined && localStorage.getItem("clicked_on_about_me") === "true"){
    localStorage.removeItem("clicked_on_about_me")
     /*
        TODO: 
        Här måste jag kolla olika skärm stolekar med window.innerWidth för att förstå vart den ska
        ska scrolla till i pixlar för det ändras när man schyssterar skärmen.
    */
    window.scrollTo({
        top: 2750,
        behavior: "smooth",
    });
}


if(localStorage.getItem("clicked_on_contact") !== undefined && localStorage.getItem("clicked_on_contact") === "true"){
    localStorage.removeItem("clicked_on_contact")
     /*
        TODO: 
        Här måste jag kolla olika skärm stolekar med window.innerWidth för att förstå vart den ska
        ska scrolla till i pixlar för det ändras när man schyssterar skärmen.
    */
    window.scrollTo({
        top: 5050,
        behavior: "smooth",
    });
}