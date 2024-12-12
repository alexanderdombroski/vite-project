import { loadCalendar, setViewSwitchSvg, showEventDetails } from "./render.mjs";
import { getNextMonth, getNextWeek, getPrevMonth, getPrevWeek, getPrevDay, getNextDay, getDateFromString } from "../utils/timereader.mjs";
import { dailyViewButton, monthlyViewButton, weeklyViewButton } from "./templates/view-switcher.mjs.mjs";
import { getEvents } from "../api/event-manager.mjs";

let selectedDate = new Date();
let currentView = "monthly";

function initCalendarNavigation() {
    const calendar = document.getElementById("calendar_content");
    calendar.querySelector(".prev").addEventListener('click', loadPrev);
    calendar.querySelector(".next").addEventListener('click', loadNext);
    calendar.querySelector("#view-switcher").addEventListener('click', switchView);
    calendar.querySelector("#calendar").addEventListener('click', addCalendarItem)
}

function loadPrev() {
    if (currentView === "monthly") {
        selectedDate = getPrevMonth(selectedDate);
    } else if (currentView === "weekly") {
        selectedDate = getPrevWeek(selectedDate);
    } else {
        selectedDate = getPrevDay(selectedDate);
    }
    loadCalendar(selectedDate, currentView);
}
function loadNext() {
    if (currentView === "monthly") {
        selectedDate = getNextMonth(selectedDate);
    } else if (currentView === "weekly") {
        selectedDate = getNextWeek(selectedDate);
    } else {
        selectedDate = getNextDay(selectedDate);
    }
    loadCalendar(selectedDate, currentView);
}

function switchView() {
    const updateView = (view, viewFun) => { setViewSwitchSvg(viewFun); currentView = view; loadCalendar(selectedDate, view); };
    if (currentView === "monthly") {
        updateView("weekly", weeklyViewButton);
    } else if (currentView === "weekly") {
        updateView("daily", dailyViewButton);
    } else {
        updateView("monthly", monthlyViewButton);
    }
    document.getElementById("calendar-container").setAttribute("data-view", currentView);
}

function addCalendarItem(event) {
    if (event.target.tagName === 'BUTTON') {
        globalThis.location.href = `new-event.html?date=${event.target.parentElement.dataset.date}&type=${event.target.dataset.type}`;
    } else if (event.target.tagName === 'P') {
        const date = event.target.parentElement.dataset.date;
        const title = event.target.innerText;
        
        const data = getEvents(getDateFromString(date)).find(
            item => item.title === title && 
            item.date === date && 
            item.startTime === (event.target.dataset.starttime) &&
            item.endTime === (event.target.dataset.endtime ?? "")
        ) ?? {
            title: title,
            date: date,
            type: event.target.dataset.type
        };
        showEventDetails(data);
    }
}



export { initCalendarNavigation }