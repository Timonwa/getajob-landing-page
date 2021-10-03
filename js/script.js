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



// job recommendations scroll
var next = document.querySelector('.next-btn>i');
next.onclick = function () {
    var container = document.querySelector('.job-cards-cntr');
    sideScroll(container, 'right', 25, 100, 10);
};

var prev = document.querySelector('.prev-btn>i');
prev.onclick = function () {
    var container = document.querySelector('.job-cards-cntr');
    sideScroll(container, 'left', 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
            prev.style.color = "var(--bright-green)";
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
} 