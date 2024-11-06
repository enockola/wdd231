import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimerLink = document.querySelector(".disclaimer a");
disclaimerLink.href = parkData.url;
disclaimerLink.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `
    <a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

function displayParkInfo(parkData) {
    const parkInfoContent = document.querySelector(".hero-banner__content")
    parkInfoContent.innerHTML = parkInfoTemplate(parkData);
}

displayParkInfo(parkData);