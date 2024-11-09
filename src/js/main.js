import { getParkData } from "./parkService.mjs";
import {
  setParkIntroTemplate,
  setParkInfoTemplate,
  setParkFooterTemplate,
} from "./templates.js";

const parkData = getParkData();

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: parkData.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: parkData.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: parkData.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];

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

setParkPage(parkData, parkInfoLinks);