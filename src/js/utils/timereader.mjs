// ---------------- Month Generation ----------------

function getMonthName(date = new Date()) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
}

function getCalendarStart(date = new Date()) {
    const calendarStart = new Date(date);
    calendarStart.setDate(1 - getMonthStart(date));
    return calendarStart;
}

function getPrevMonthEnd(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

function getMonthStart(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

function getMonthEnd(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

// ---------------- Week Generation ----------------

function getWeekDays(date = new Date()) {
    const weekDays = []
    const sunday = date.getDate() - date.getDay()
    for (let i = sunday; i < sunday + 7; i++) {
        weekDays.push(new Date(date.getFullYear(), date.getMonth(), i))
    }
    return weekDays;
}

const getWeekDates = () => getWeekDays().map(day => day.getDate());

function getWeekStart(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay())
}

// ---------------- Navigation ----------------

function getPrevMonth(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
}
function getNextMonth(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
}
function getPrevWeek(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
}
function getNextWeek(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
}
function getPrevDay(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
}
function getNextDay(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

// ---------------- General Purpose ----------------

function getDateFromString(str) {
    return new Date(str + 'T' + timeToString());
}

function defaultYear(date = new Date()) {
    return new Date(new Date().getFullYear(), date.getMonth(), date.getDate());
}
function dateToISOString(date = new Date()) {
    return date.toISOString('en-GB').split('T')[0];
}
function dateToString(date = new Date()) {
    return date.toLocaleDateString('en-GB').split('T')[0];
}
function timeToString(date = new Date()) {
    return date.toLocaleTimeString('en-GB', {hour12: false});
}

export { 
    getCalendarStart, getMonthName, getMonthStart, getPrevMonthEnd, getMonthEnd, 
    getWeekDates, getWeekDays, getWeekStart,
    getPrevMonth, getNextMonth, getNextWeek, getPrevWeek, getNextDay, getPrevDay,
    getDateFromString, defaultYear, dateToISOString, dateToString
}