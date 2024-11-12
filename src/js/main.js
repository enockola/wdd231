import { getParkData } from "./parkService.mjs";
import {
  getInfoLinks,
  setParkIntroTemplate,
  setParkInfoTemplate,
  setParkFooterTemplate,
} from "./templates.js";


function setParkPage(data, links) {
  // Set header content
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  document.querySelector("head > title").textContent = data.fullName;
  document.querySelector(".hero-banner > img").src = data.images[0].url;

  // Set park intro
  document.querySelector(".hero-banner__content").innerHTML = setParkIntroTemplate(data);

  // Set main content
  const { introText, mediaCards } = setParkInfoTemplate(data, links);
  document.querySelector(".text-content").innerHTML = introText;
  document.querySelector(".figure-container").innerHTML = mediaCards;

  // Set footer
  document.querySelector("#park-footer").innerHTML = setParkFooterTemplate(data);
}


async function init() {
  const parkData = await getParkData();  
  const links = getInfoLinks(parkData.images);
  setParkPage(parkData, links);
}

init();