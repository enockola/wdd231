const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;
const idCode = "glac";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey
  }
};

export async function getParkData() {
  let data = {};
  const response = await fetch(baseUrl + "parks" + "?parkCode=" + idCode, options);
  // check to make sure the reponse was ok.
  if (response.ok) {
    // convert to JSON
    data = await response.json(); 
  } else throw new Error("response not ok");
  // return just the first row of the data object
  return data.data[0];
}

export async function getParkAlerts() {
  let alerts = {};
  const response = await fetch(baseUrl + "alerts" + "?parkCode=" + idCode, options);
  // check to make sure the reponse was ok.
  if (response.ok) {
    // convert to JSON
    alerts = await response.json();
  } else throw new Error("response not ok");
  // return just the first row of the data object
  return alerts.data;
}

export async function getVisitorCenterData() {
  let visitorCenters = {};
  const response = await fetch(baseUrl + "visitorcenters" + "?parkCode=" + idCode, options);
  // check to make sure the reponse was ok.
  if (response.ok) {
    // convert to JSON
    visitorCenters = await response.json();
  } else throw new Error("response not ok");
  // return just the first row of the data object
  return visitorCenters.data;
}

export async function getActivitiesData() {
  let activities = {};
  const response = await fetch(baseUrl + "activities" + "?id=" + idCode, options);
  // check to make sure the reponse was ok.
  if (response.ok) {
    // convert to JSON
    activities = await response.json();
  } else throw new Error("response not ok");
  // return just the first row of the data object
  return activities.data;
}