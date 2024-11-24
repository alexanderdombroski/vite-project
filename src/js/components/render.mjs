// Add templates to the page
import { getCalendarStart, getMonthName, getMonthEnd, getPrevMonthEnd, getMonthStart } from '../utils/timereader.mjs';
import { dayTemplate } from "./templates/templates.mjs";
import { getHolidays } from "../api/holiday.mjs";
import { eventFormTemplate, subeventTemplate} from "./templates/calendar-form.mjs";
import { events } from "../api/event-manager.mjs";
import { getURLParameter } from "../utils/urlParams.js";


// ---------------------- Calendar ----------------------

function loadCalendar(date = new Date()) {
    // Load Calendar Title
    const title = `${getMonthName(date)} - ${date.getFullYear()}`;
    document.getElementById("calendar-title").innerText = title;

    const calendar = document.getElementById('calendar');

    const monthStartWeekdayNum = getMonthStart(date);
    const pointer = getCalendarStart(date)
    const nextDay = () => pointer.setDate(pointer.getDate() + 1);
    const prevMonthEnd = getPrevMonthEnd(date);
    
    calendar.innerHTML = "";

    for (let i = prevMonthEnd - monthStartWeekdayNum + 1; i <= prevMonthEnd; i++) {
        calendar.innerHTML += dayTemplate(i, getHolidays(pointer));
        nextDay();
    }
    
    const monthEnd = getMonthEnd(date);

    function getDayTemplate(i) {
        const template = dayTemplate(i+1, getHolidays(pointer));
        nextDay()
        return template
    }

    calendar.innerHTML += [...Array(monthEnd).keys()].map(getDayTemplate).join('');
    calendar.innerHTML += [...Array((7 - (monthStartWeekdayNum + monthEnd) % 7) % 7).keys()].map(getDayTemplate).join('');
}

export function loadEvents() {
    document.getElementById("calendarevents").innerHTML = events.map(event => `<li>${event.title}</li>`).join("");
}

// ---------------------- Event-Forum ----------------------

let subevents;

function loadEventForm() {
    subevents = 0;
    document.getElementById("event-form").innerHTML = eventFormTemplate({type: getURLParameter("type", "event")});
    document.getElementById("add-sub").addEventListener("click", addSub);
    document.getElementById("remove-sub").addEventListener("click", removeSub);
}

function addSub() {
    document.getElementById("subevents").innerHTML += subeventTemplate(subevents++)
}

function removeSub() {
    if (subevents == 0) return;
    document.getElementById("subevents").lastElementChild.remove()
    subevents -= 1;
}


export { loadCalendar, loadEventForm }