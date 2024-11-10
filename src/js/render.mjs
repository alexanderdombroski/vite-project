// Add templates to the page
import { getCalendarStart, getMonthName, getMonthEnd, getPrevMonthEnd, getMonthStart } from './timereader.mjs';
import { dayTemplate } from "./templates.mjs";
import { getHolidays } from "./holiday.mjs";

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
        nextDay()
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

export { loadCalendar }