export function getMailingAddress(addresses) {
    return addresses.find((address) => address.type === "Mailing");
}

export function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

export function setParkIntroTemplate(data) {
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
