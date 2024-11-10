// ---------------- Month Generation ----------------

function getMonthName(date = new Date()) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()]
}

function getPrevMonthEnd(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

function getMonthStart(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
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
    return weekDays
}

const getWeekDates = () => getWeekDays().map(day => day.getDate())

// ---------------- Navigation ----------------

function getPrevMonth(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
}
function getNextMonth(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
}
function getPrevWeek(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7)
}
function getNextWeek(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7)
}

// ---------------- General Purpose ----------------

function getDateFromString(str) {
    return new Date(str + 'T00:00:00Z');
}

export { 
    getMonthName, getMonthStart, getPrevMonthEnd, getMonthEnd, 
    getWeekDates, getWeekDays,
    getPrevMonth, getNextMonth, getNextWeek, getPrevWeek,
    getDateFromString
}