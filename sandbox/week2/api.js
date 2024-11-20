const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
    // replace this with your actual key
    const apiKey = "N1CTP81TzCHFIlFtCvTgdaQ2JDEoJVz1a5qCqfz0";
    // construct the url: baseUrl + endpoint + parameters
    const url = baseUrl + endpoint;
    // set the options. The important one here is the X-Api-Key
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey
        }
    }
    // make the request
    const response = await fetch(url, options)
    const data = await response.json()
    return data;
}

function listTemplate(item) {
    return `<li><a href="${item.url}">${item.fullName}</a> ${item.states}</li>`
}

async function renderClimbingList() {
    const endpoint = "activities/parks?q=climbing";
    const listElement = document.getElementById("outputList");
    const data = await getJson(endpoint);
    const parks = data.data[0].parks;
    console.log(parks)
    const listHtml = parks.map(listTemplate).join("");
    listElement.innerHTML = listHtml;
}
renderClimbingList()