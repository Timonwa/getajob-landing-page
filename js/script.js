// * function to close the dropdown menu on smaller screens
function navLinkCloseMenu() {
    document.querySelector(".open").style.display = "block";
    document.querySelector(".close").style.display = "none";
    document.querySelector(".nav-links-n-btns").style.top = "-100vh";
}

// * function to open the dropdown menu on smaller screens
function navLinkOpenMenu() {
    document.querySelector(".open").style.display = "none";
    document.querySelector(".close").style.display = "block";
    document.querySelector(".nav-links-n-btns").style.top = "var(--nav-height)";
}


// * burger menu toggle
// select burger menu
const menu = document.querySelector(".burger-menu");
// add event listener to toggle burger menu
menu.addEventListener("click", function () {
    if (document.querySelector(".open").style.display === "none") {
        navLinkCloseMenu()
    }
    else {
        navLinkOpenMenu()
    }
});