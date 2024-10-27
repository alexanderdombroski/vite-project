function getMonthName(date = new Date()) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()]
}

function getMonthStart(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

function getPrevMonthEnd(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

function getMonthEnd(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}


export { getMonthName, getMonthStart, getPrevMonthEnd, getMonthEnd }