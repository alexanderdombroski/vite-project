// Add templates to the page
import { getCalendarStart, getMonthName, getMonthEnd, getPrevMonthEnd, getMonthStart, getWeekStart } from '../utils/timereader.mjs';
import { dayTemplate, footerTemplate, headerTemplate } from "./templates/templates.mjs";
import { getHolidays } from "../api/holiday.mjs";
import { eventFormTemplate, subeventTemplate} from "./templates/calendar-form.mjs";
// import { events } from "../api/event-manager.mjs";
import { getURLParameter } from "../utils/urlParams.js";
import { getEvents } from "../api/event-manager.mjs";


export function renderHeaderFooter() {
    document.querySelector("header").insertAdjacentHTML('afterbegin', headerTemplate());
    document.querySelector("footer").insertAdjacentHTML('afterbegin', footerTemplate());
}

// ---------------------- Calendar ----------------------

export function setViewSwitchSvg(template) {
    document.getElementById("view-switcher").innerHTML = template();
}

function loadCalendar(date = new Date(), view = "monthly") {
    // Load Calendar Title
    const title = `${getMonthName(date)} - ${date.getFullYear()}`;
    document.getElementById("calendar-title").innerText = title;

    const calendar = document.getElementById('calendar');
    calendar.innerHTML = "";

    let pointer;
    const nextDay = () => pointer.setDate(pointer.getDate() + 1);

    function getDayTemplate(i) {
        const template = dayTemplate(i+1, getHolidays(pointer), getEvents(pointer));
        nextDay()
        return template
    }

    if (view === "monthly") {
        const monthStartWeekdayNum = getMonthStart(date);
        pointer = getCalendarStart(date)
        const prevMonthEnd = getPrevMonthEnd(date);

        for (let i = prevMonthEnd - monthStartWeekdayNum + 1; i <= prevMonthEnd; i++) {
            calendar.innerHTML += dayTemplate(i, getHolidays(pointer), getEvents(pointer));
            nextDay();
        }
        
        const monthEnd = getMonthEnd(date);
    
        calendar.innerHTML += [...Array(monthEnd).keys()].map(getDayTemplate).join('');
        calendar.innerHTML += [...Array((7 - (monthStartWeekdayNum + monthEnd) % 7) % 7).keys()].map(getDayTemplate).join('');
    } else if (view === "weekly") {
        pointer = getWeekStart(date);
        const end =  pointer.getDate() + 7
        for (let i = pointer.getDate(); i < end; i++) {
            calendar.innerHTML += dayTemplate(i, getHolidays(pointer), getEvents(pointer));
            nextDay();
        }
    }
    
    

}



// ---------------------- Event-Forum ----------------------

let subevents;

function loadEventForm() {
    subevents = 0;
    const type = getURLParameter("type", "event");
    document.getElementById("event-form").innerHTML = eventFormTemplate({type: type});
    document.getElementById("add-sub").addEventListener("click", () => addSub(type === "goal"));
    document.getElementById("remove-sub").addEventListener("click", removeSub);
}

function addSub(type) {
    document.getElementById("subevents").innerHTML += subeventTemplate(subevents++, type)
}

function removeSub() {
    if (subevents == 0) return;
    document.getElementById("subevents").lastElementChild.remove()
    subevents -= 1;
}


export { loadCalendar, loadEventForm }