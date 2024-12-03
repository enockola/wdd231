export function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    const subMenuToggles = document.querySelectorAll(
        ".global-nav__split-button__toggle"
      );

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
    
    subMenuToggles.forEach((toggle) => {
        //for each submenu toggle
        toggle.addEventListener("click", (ev) => {
          // find the closest li ancestor, then find the submenu inside of that li and toggle the show class
          ev.currentTarget.closest("li").nextElementSibling.classList.toggle("show__submenu");
          // toggle the rotate class on the button icon that was clicked
          ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
        });
      });
}