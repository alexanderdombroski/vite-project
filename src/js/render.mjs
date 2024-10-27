// Add templates to the page
import { getMonthName, getMonthEnd, getPrevMonthEnd, getMonthStart } from './timereader.mjs';
import { dayTemplate } from "./templates.mjs";

function loadCalendar(date = new Date()) {
    // Load Calendar Title
    const title = `${getMonthName(date)} - ${date.getFullYear()}`;
    document.getElementById("calendar-title").innerText = title;

    const calendar = document.getElementById('calendar');

    const monthStartWeekdayNum = getMonthStart(date);
    const prevMonthEnd = getPrevMonthEnd(date);
    
    for (let i = prevMonthEnd - monthStartWeekdayNum + 1; i <= prevMonthEnd; i++) {
        calendar.innerHTML += dayTemplate(i);
    }
    
    const monthEnd = getMonthEnd(date);

    calendar.innerHTML += [...Array(monthEnd).keys()].map(i => dayTemplate(i+1)).join('');
    calendar.innerHTML += [...Array((7 - (monthStartWeekdayNum + monthEnd) % 7) % 7).keys()].map(i => dayTemplate(i+1)).join('');
}

export { loadCalendar }