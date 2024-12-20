// Add templates to the page
import { getCalendarStart, getMonthName, getMonthEnd, getPrevMonthEnd, getMonthStart, getWeekStart } from '../utils/timereader.mjs';
import { dayTemplate, eventDetailsModalTemplate, footerTemplate, headerTemplate } from "./templates/templates.mjs";
import { eventFormTemplate, subeventTemplate} from "./templates/calendar-form.mjs";
import { getURLParameter } from "../utils/urlParams.js";


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
        const template = dayTemplate(i+1, pointer);
        nextDay()
        return template
    }

    if (view === "monthly") {
        const monthStartWeekdayNum = getMonthStart(date);
        pointer = getCalendarStart(date)
        const prevMonthEnd = getPrevMonthEnd(date);

        for (let i = prevMonthEnd - monthStartWeekdayNum + 1; i <= prevMonthEnd; i++) {
            calendar.innerHTML += dayTemplate(i, pointer);
            nextDay();
        }
        
        const monthEnd = getMonthEnd(date);
    
        calendar.innerHTML += [...Array(monthEnd).keys()].map(getDayTemplate).join('');
        calendar.innerHTML += [...Array((7 - (monthStartWeekdayNum + monthEnd) % 7) % 7).keys()].map(getDayTemplate).join('');
    } else if (view === "weekly") {
        pointer = getWeekStart(date);
        const end =  pointer.getDate() + 7
        for (let i = pointer.getDate(); i < end; i++) {
            calendar.innerHTML += dayTemplate(i, pointer);
            nextDay();
        }
    }
}


function showEventDetails(data) {
    const modal = document.getElementById("event-modal");
    modal.innerHTML = eventDetailsModalTemplate(data);
    const closeBtn = document.createElement("button")
    closeBtn.addEventListener('click', (event) => event.currentTarget.parentElement.hidden = true);
    closeBtn.innerText = "X";
    modal.insertAdjacentElement("afterbegin", closeBtn);
    modal.hidden = false;
}


// ---------------------- Event-Forum ----------------------

let subevents;

function loadEventForm() {
    subevents = 0;
    const type = getURLParameter("type", "event");
    const date = getURLParameter("date", "");
    document.getElementById("event-form").innerHTML = eventFormTemplate({type: type, date: date});
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


export { loadCalendar, loadEventForm, showEventDetails }