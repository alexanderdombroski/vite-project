import { loadCalendar, setViewSwitchSvg } from "./render.mjs";
import { getNextMonth, getPrevMonth } from "../utils/timereader.mjs";
import { dailyViewButton, monthlyViewButton, weeklyViewButton } from "./templates/view-switcher.mjs.mjs";

let selectedDate = new Date();
let currentView = "monthly";

function initCalendarNavigation() {
    const calendar = document.getElementById("calendar_content");
    calendar.querySelector(".prev").addEventListener('click', loadPrev);
    calendar.querySelector(".next").addEventListener('click', loadNext);
    calendar.querySelector("#view-switcher").addEventListener('click', switchView);
}

function loadPrev() {
    // TODO add branching to handle weeks or months
    selectedDate = getPrevMonth(selectedDate);
    loadCalendar(selectedDate);
}
function loadNext() {
    selectedDate = getNextMonth(selectedDate);
    loadCalendar(selectedDate);
}

function switchView() {
    const updateView = (view, viewFun) => { setViewSwitchSvg(viewFun); currentView = view; };
    if (currentView === "monthly") {
        updateView("weekly", weeklyViewButton);
    } else if (currentView === "weekly") {
        updateView("daily", dailyViewButton);
    } else {
        updateView("monthly", monthlyViewButton);
    }
}

export { initCalendarNavigation }