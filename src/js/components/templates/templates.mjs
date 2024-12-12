import githubLogo from "../../../assets/github-logo.svg?raw";
import { getEvents } from "../../api/event-manager.mjs";
import { getHolidays } from "../../api/holiday.mjs";
import { dateToISOString } from "../../utils/timereader.mjs";

// Format Templates

export function dayTemplate(dayNumber, date) {
  return `
    <div class="day" data-date="${dateToISOString(date)}">
      <span>${dayNumber}</span>
      <button data-type="event">+</button>
      <button data-type="goal">+</button>
      ${getHolidays(date)
        .map((e) => holidayTemplate(e))
        .join("")}
      ${getEvents(date)
        .map((e) => eventTemplate(e))
        .join("")}
    </div>
  `;
}


function eventTemplate(event) {
  return `
    <p>${event.title}</p>
  `;
}
function holidayTemplate(holiday) {
  return `
    <p>${holiday}</p>
  `;
}

export function countryFormTemplate(data) {
  return `
    <select id="country-select">
      <option value="">Select a country</option>
      ${data
        .map(
          (country) =>
            `<option value="${country.countryCode}">${country.name}</option>`
        )
        .join("")}
    </select>
    <button id="country-submit">Submit</button>
  `;
}

// -------------------- Header Footer --------------------

export function footerTemplate() {
  return `
    <p>&copy; 2024 ChronoPlan. All rights reserved.</p>
    <a href="https://github.com/alexanderdombroski/vite-project">
      ${githubLogo}
    </a>
  `;
}
export function headerTemplate() {
  return `
    <div id="global-header-left">
      <a id="logo-link" href="./index.html">
        <img id="logo" src="./images/chronoplan_logo.png" alt="ChronoPlan Logo">
      </a>
      <h1 id="header-title">ChronoPlan</h1>
    </div>
    <div id="global-header-right">
      <h2 id="main-menu-button">Menu</h2>
    </div>
    <nav class="header-drop-down">
      <div id="main-menu">
        <ul id="main-menu-list">
          <li><a href="./index.html">Home</a></li>
          <li><a href="./calendar.html">Planner</a></li>
        </ul>
      </div>
    </nav>
  `;
}
