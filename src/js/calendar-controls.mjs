import { loadCalendar } from "./render.mjs";
import { getNextMonth, getPrevMonth } from "./timereader.mjs";

let selectedDate = new Date();

function initCalendarNavigation() {
    const calendar = document.getElementById("calendar_content");
    calendar.querySelector(".prev").addEventListener('click', loadPrev)
    calendar.querySelector(".next").addEventListener('click', loadNext)
}

function loadPrev() {
    // TODO add branching to handle weeks or months
    selectedDate = getPrevMonth(selectedDate)
    loadCalendar(selectedDate)
}
function loadNext() {
    selectedDate = getNextMonth(selectedDate)
    loadCalendar(selectedDate)
}



export { initCalendarNavigation }