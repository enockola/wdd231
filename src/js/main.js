import { getParkData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import {
  getInfoLinks,
  setParkInfoTemplate,
} from "./templates.js";

function setParkMain(data, links) {
  const { introText, mediaCards } = setParkInfoTemplate(data, links);
  document.querySelector(".text-content").innerHTML = introText;
  document.querySelector(".figure-container").innerHTML = mediaCards;
}

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderFooter(parkData);
  setParkMain(parkData, links);
}

init();