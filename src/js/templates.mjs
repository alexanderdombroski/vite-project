// Format Templates

export function dayTemplate(dayNumber) {
    return `
    <div class="day">
        <span>${dayNumber}</span>

    </div>
    `
};

export function countryFormTemplate(data){
    return `
    <select id="country-select">
        <option value="">Select a country</option>
        ${data.map(country => `<option value="${country.countryCode}">${country.name}</option>`).join('')}
    </select>
    `
};
