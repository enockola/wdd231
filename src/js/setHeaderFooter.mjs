import {
    setParkHeaderTemplate,
    setParkFooterTemplate,
} from "./templates.js";

export function setHeaderFooter(data) {
    setParkHeader(data);
    setParkFooter(data);
}

export function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");

    // when the main menu button is clicked:
    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;
        // toggle the show class on the global-nav
        document.querySelector(".global-nav").classList.toggle("show");
        // check to see if ev.target is the button or something inside the button
        if (target.tagName != "BUTTON") {
            target = target.closest("button");
        }
        // check to see if we just opened or closed the menu
        if (document.querySelector(".global-nav").classList.contains("show")) {
            // if we opened it then set the aria-expanded attribute to true
            target.setAttribute("aria-expanded", true);
        } else {
            // if we closed it then set the aria-expanded attribute to false
            target.setAttribute("aria-expanded", false);
        }
    });
}

function setParkHeader(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".hero-banner > img").src = data.images[0].url;

    document.querySelector(".hero-banner__content").innerHTML = setParkHeaderTemplate(data);
}

function setParkFooter(data) {
    document.querySelector("#park-footer").innerHTML = setParkFooterTemplate(data);
}