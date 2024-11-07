
async function getHolidays(countryCode = 'us') {
    const response = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`);
    const json = await response.json();
    return json;
}

async function getCountryList() {
    const response = await fetch(`https://date.nager.at/api/v3/AvailableCountries`)
    const json = await response.json();
    return json;
}


export { getHolidays, getCountryList };