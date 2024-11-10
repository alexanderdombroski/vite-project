// Format Templates

export function dayTemplate(dayNumber, holidays, events = []) {
    return `
    <div class="day">
        <span>${dayNumber}</span>
        ${holidays.map(e => holidayTemplate(e)).join("")}
        ${events.map(e => eventTemplate(e)).join("")}
    </div>
    `
};

function eventTemplate(event) {
    return `
        <p>${event.name}</p>
    `
}
function holidayTemplate(holiday) {
    return `
        <p>${holiday}</p>
    `
}

export function countryFormTemplate(data){
    return `
    <select id="country-select">
        <option value="">Select a country</option>
        ${data.map(country => `<option value="${country.countryCode}">${country.name}</option>`).join('')}
    </select>
    <button id="country-submit">Submit</button>
    `
};
