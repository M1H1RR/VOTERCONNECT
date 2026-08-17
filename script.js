/* =========================================
   VOTERCONNECT - JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close menu after clicking a navigation link */

document.querySelectorAll("#navLinks a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});



/* =========================================
   SEARCH FUNCTION
   ========================================= */

const searchInput =
    document.getElementById("searchInput");

const cards =
    document.querySelectorAll(".info-card.searchable");

const noResults =
    document.getElementById("noResults");


searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value
        .trim()
        .toLowerCase();


    let visibleCards = 0;


    cards.forEach(function (card) {

        const cardText =
            card.textContent.toLowerCase();


        if (cardText.includes(searchText)) {

            card.classList.remove("hidden");

            visibleCards++;

        }

        else {

            card.classList.add("hidden");

        }

    });


    /* Show message if nothing is found */

    if (visibleCards === 0) {

        noResults.classList.remove("hidden");

    }

    else {

        noResults.classList.add("hidden");

    }

});



/* =========================================
   TOAST MESSAGE
   ========================================= */

const toast =
    document.getElementById("toast");


let toastTimer;


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(function () {

        toast.classList.remove("show");

    }, 3500);

}



/* =========================================
   OFFICIAL LINK PLACEHOLDERS
   ========================================= */

document
    .querySelectorAll(".official-link")
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            /*
             * Currently these are placeholder links.
             * Replace href="#" with the verified
             * official Election Authority URL
             * when you receive it.
             */

            if (link.getAttribute("href") === "#") {

                event.preventDefault();

                const message =
                    link.dataset.message ||
                    "Add the verified official link here.";

                showToast(message);

            }

        });

    });



/* =========================================
   BACK TO TOP BUTTON
   ========================================= */

const topButton =
    document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    }

    else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const sections =
    document.querySelectorAll("main section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================================
   PAGE LOADED MESSAGE
   ========================================= */

console.log(
    "VoterConnect website loaded successfully."
);

console.log(
    "Remember to replace placeholder election links with information verified by the concerned authority."
);