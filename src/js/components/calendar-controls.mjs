import { loadCalendar, setViewSwitchSvg } from "./render.mjs";
import { getNextMonth, getNextWeek, getPrevMonth, getPrevWeek, getPrevDay, getNextDay } from "../utils/timereader.mjs";
import { dailyViewButton, monthlyViewButton, weeklyViewButton } from "./templates/view-switcher.mjs.mjs";

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
    if (event.target.tagName !== 'BUTTON') return;
    globalThis.location.href = `new-event.html?date=${event.target.dataset.date}&type=${event.target.dataset.type}`;
}


export { initCalendarNavigation }