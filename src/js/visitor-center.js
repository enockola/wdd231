import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { listTemplate,
    vcImageTemplate,
    vcAmenityTemplate,
    vcTitleTemplate,
    vcInfoTemplate,
    vcAddressesListTemplate,
    vcDirectionsTemplate,
    vcContactsTemplate
 } from "./templates.js";

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

function setVisitorCenterDetails(centerDetails) {
    document.querySelector(".vc-name").innerHTML = vcTitleTemplate(centerDetails.name);
    document.querySelector(".vc-info").innerHTML = vcInfoTemplate(centerDetails);
    document.querySelector("#vcAddresses").insertAdjacentHTML("beforeend", vcAddressesListTemplate(centerDetails.addresses));
    document.querySelector("#vcDirections").insertAdjacentHTML("beforeend", vcDirectionsTemplate(centerDetails.
        directionsInfo));
    document.querySelector("#vcAmenities").insertAdjacentHTML("beforeend", listTemplate(centerDetails.amenities, vcAmenityTemplate));
    document.querySelector("#vcContact").insertAdjacentHTML("beforeend", vcContactsTemplate(centerDetails.contacts));
    

    const galleryHTML = listTemplate(centerDetails.images, vcImageTemplate);
    document.querySelector('.vc-gallery').insertAdjacentHTML("beforeend", galleryHTML); 
}

async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
    const id = getParam("id");
    const centerDetails = await getParkVisitorCenterDetails(id);
    console.log(centerDetails)
    setVisitorCenterDetails(centerDetails)
}

init();
