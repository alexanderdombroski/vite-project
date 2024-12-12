import githubLogo from "../../../assets/github-logo.svg?raw";
import { getEvents } from "../../api/event-manager.mjs";
import { getHolidays } from "../../api/holiday.mjs";
import { dateToISOString } from "../../utils/timereader.mjs";
import p3 from "../../../images/chronoplan_logo.png";
import { capitalize, toTitleCase } from "../../utils/str.mjs";

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
  const { title, startTime, endTime, type } = event
  return `
    <p data-type="${type}" data-starttime="${startTime}" data-endtime="${endTime}">${title}</p>
  `;
}
function holidayTemplate(holiday) {
  return `
    <p data-type="holiday">${holiday}</p>
  `;
}

export function eventDetailsModalTemplate(data) {
  const { title, date, desc, startTime, endTime, type } = data;
  return `
    <article>
      <h2>${toTitleCase(title)}</h2>
      <p>${capitalize(type)}</p>
      <p>${date}</p>
      ${desc ? `<p>${desc}</p>` : ""}
      ${
        startTime && endTime ? `<p><span>${startTime}</span> - <span>${endTime}</span></p>` :
        startTime ? `<p>${startTime}</p> ` :     
        endTime ? `<p>${endTime}</p> ` : ""    
      }
    </article>
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
        <img id="logo" src=${p3} alt="ChronoPlan Logo">
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
