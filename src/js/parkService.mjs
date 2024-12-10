const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;
const idCode = "glac";

async function getJson(endpoint) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  const response = await fetch(baseUrl + endpoint, options);
  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.statusText}`);
  }
  return response.json();
}

export async function getParkData() {
  const data = await getJson(`parks?parkCode=${idCode}`);
  return data.data[0];
}

export async function getParkAlerts() {
  const alerts = await getJson(`alerts?parkCode=${idCode}`);
  return alerts.data;
}

export async function getVisitorCenterData() {
  const visitorCenters = await getJson(`visitorcenters?parkCode=${idCode}`);
  return visitorCenters.data;
}

export async function getActivitiesData() {
  const activities = await getJson(`activities?id=${idCode}`);
  return activities.data;
}

export async function getParkVisitorCenterDetails(id) {
  const centerData = await getJson(`visitorcenters?id=${id}`);
  return centerData.data[0];
}