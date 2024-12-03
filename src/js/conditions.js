import { getParkData } from "./parkService.mjs";
import { getParkAlerts } from "./parkService.mjs";
import { getVisitorCenterData } from "./parkService.mjs";
import { getActivitiesData } from "./parkService.mjs";
import { setAlertTemplate, setVisitorCenterTemplate, setActivitiesTemplate } from "./templates";
import { setHeaderFooter} from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector("#alerts > ul");
    const alertHTML = alerts.map(alert => setAlertTemplate(alert)).join('');
    alertsContainer.innerHTML = alertHTML;
}

function setVisitorCenter(visitor_centers) {
    const visitorCenterContainer = document.querySelector(".visitor-center ul");
    const visitorCenterHTML = visitor_centers.map(visitor => setVisitorCenterTemplate(visitor)).join('<hr>');
    visitorCenterContainer.innerHTML = visitorCenterHTML;
}

function setActivities(activities) {
    const activitiesContainer = document.querySelector(".activities ul");
    const activitiesHTML = activities.map(activity => setActivitiesTemplate(activity)).join('');
    activitiesContainer.innerHTML = activitiesHTML;
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts();
    const visitorCenterData = await getVisitorCenterData();
    const activitiesData = await getActivitiesData();
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenter(visitorCenterData);
    setActivities(activitiesData);
}

init();