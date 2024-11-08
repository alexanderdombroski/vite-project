
async function getHolidays() {
    const countryCode = localStorage.getItem('selectedCountry');
    
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


export { getHolidays, getCountryList };