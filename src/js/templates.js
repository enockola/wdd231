//add this at the top of the file
import spritePath from '../images/sprite.symbol.svg';

export function getMailingAddress(addresses) {
  return addresses.find((address) => address.type === "Mailing");
}

export function getVoicePhone(numbers) {
  const voice = numbers.find((number) => number.type === "Voice");
  return voice.phoneNumber;
}

export function getInfoLinks(data) {
  const parkInfoLinks = [
    {
      name: "Current Conditions &#x203A;",
      link: "conditions.html",
      description:
        "See what conditions to expect in the park before leaving on your trip!"
    },
    {
      name: "Fees and Passes &#x203A;",
      link: "fees.html",
      description: "Learn about the fees and passes that are available."
    },
    {
      name: "Visitor Centers &#x203A;",
      link: "visitor_centers.html",
      description: "Learn about the visitor centers in the park."
    }
  ];

  const withUpdatedImages = parkInfoLinks.map((item, index) => {
    item.image = data[index + 2].url;
    return item;
  });
  return withUpdatedImages;
}

export function setParkHeaderTemplate(data) {
  return `
      <a href="/" class="hero-banner__title">${data.name}</a>
      <p class="hero-banner__subtitle">
        <span>${data.designation}</span>
        <span>${data.states}</span>
      </p>`;
}

export function setParkInfoTemplate(data, links) {
  const introText = `
      <h1>${data.fullName}</h1>
      <p>${data.description}</p>`;

  const mediaCards = links.map(link => `
      <a href="${link.link}" class="figure-content">
        <img src="${link.image}" alt="${link.name} image">
        <div class="content">
          <h2>${link.name}</h2>
          <p>${link.description}</p>
        </div>
      </a>
    `).join("");

  return {
    introText,
    mediaCards
  };
}

export function setParkFooterTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `
      <div class="container">
        <p>Contact Info</p>
        <ul>
          <li>Mailing Address:</li>
          <li>
            <a href="">${mailing.line1}<br>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</a>
          </li>
        </ul>
        <ul>
          <li>Phone:</li>
          <li>
            <a href="">${voice}</a>
          </li>
        </ul>
      </div>`;
}

export function setAlertTemplate(alert) {
  let alertType = "";
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `
    <li class="alert">
      <svg class="icon" focusable="false" aria-hidden="true">
        <use xlink:href="${spritePath}#alert-${alertType}"></use>
      </svg>
      <div>
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
      </div>
    </li>
  `;
}

export function setVisitorCenterTemplate(visitorCenter) {
  return `
    <li class="visitor">
      <h3><a href="visitor-center.html?id=${visitorCenter.id}">${visitorCenter.name}</a></h3>
      <p>${visitorCenter.description}</p>
      <p>${visitorCenter.directionsInfo}</p>
    </li>
  `;
}

export function setActivitiesTemplate(activities) {
  return `
    <li class="activity">${activities.name}</li>
  `;
}

function iconTemplate(icon) {
  return `
  <svg class="icon" role="presentation" focusable="false">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/sprite.symbol.svg#${icon}">
  </use>
  </svg>
  `
}

export function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
  const image = data.images[0];
  return `<figure>
          <img src="${image.url}" alt="${image.altText}" />
          <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
        </figure>
        <p>${data.description}</p>`;
}

export function listTemplate(data, contentTemplate) {
  return `<ul>${data.map(contentTemplate).join("")}</ul>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}

function vcAddressTemplate(data) {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}

export function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}

export function vcContactsTemplate(data) {
  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
          </section>`;
}