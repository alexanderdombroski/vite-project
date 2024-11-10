import { getDateFromString, defaultYear, dateToString } from "./timereader.mjs";

const holidays = {};

async function loadHolidays() {
    // Load Holidays to holiday list
    const data = await fetchHolidays();
    
    function addHoliday(holiday) {
        const date = dateToString(defaultYear(getDateFromString(holiday.date)))
        if (!(date in holidays)) holidays[date] = [];
        holidays[date].push(holiday.name);
    }
    
    data.forEach(h => addHoliday(h));
    console.log(holidays)
};

async function fetchHolidays() {
    let countryCode = localStorage.getItem('selectedCountry');
    
    // If no country code is found, default to US
    if (!countryCode || countryCode === 'undefined') {
        countryCode = 'US';
    }

    const response = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`);
    const json = await response.json();
    return json;
}

async function getCountryList() {
    const response = await fetch(`https://date.nager.at/api/v3/AvailableCountries`)
    const json = await response.json();
    return json;
}


function getHolidays(date = new Date()) {
    return holidays[dateToString(defaultYear(date))] ?? [];
}

export { loadHolidays, getHolidays, getCountryList };