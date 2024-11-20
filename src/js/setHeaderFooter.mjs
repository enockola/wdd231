import {
    setParkHeaderTemplate,
    setParkFooterTemplate,
  } from "./templates.js";

export function setHeaderFooter(data) {
    setParkHeader(data);
    setParkFooter(data);
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