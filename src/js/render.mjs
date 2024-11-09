// Add templates to the page
import { getMonthName, getMonthEnd, getPrevMonthEnd, getMonthStart } from './timereader.mjs';
import { dayTemplate } from "./templates.mjs";

// ---------------------- Calendar ----------------------

function loadCalendar(date = new Date()) {
    // Load Calendar Title
    const title = `${getMonthName(date)} - ${date.getFullYear()}`;
    document.getElementById("calendar-title").innerText = title;

    const calendar = document.getElementById('calendar');

    const monthStartWeekdayNum = getMonthStart(date);
    const prevMonthEnd = getPrevMonthEnd(date);
    
    calendar.innerHTML = "";

    for (let i = prevMonthEnd - monthStartWeekdayNum + 1; i <= prevMonthEnd; i++) {
        calendar.innerHTML += dayTemplate(i);
    }
    
    const monthEnd = getMonthEnd(date);

    calendar.innerHTML += [...Array(monthEnd).keys()].map(i => dayTemplate(i+1)).join('');
    calendar.innerHTML += [...Array((7 - (monthStartWeekdayNum + monthEnd) % 7) % 7).keys()].map(i => dayTemplate(i+1)).join('');
}

function loadHolidays(holidays) {
    document.querySelector("main").innerHTML += `<h2>Holidays</h2><ul><li>${holidays.map(data => `${data.name} - ${data.date}`).join('</li><li>')}</li></ul>`
}

export { loadCalendar, loadHolidays }