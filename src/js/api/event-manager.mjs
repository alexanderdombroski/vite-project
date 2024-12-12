import { defaultYear } from "../utils/timereader.mjs";
import { dateToISOString } from "../utils/timereader.mjs";

let events = {};
const recurringEvents = [];

// ----------------- From Storage -----------------

function readEventsFromStorage(year = new Date().getFullYear()) {
    const data = localStorage.getItem(`events-${year}`);
    if (data) {
      events = JSON.parse(data);
    }
};

// ----------------- Form Handling -----------------

function addFormSubmitListener() {
    document.getElementById('event-form').addEventListener('submit', submitEventForm);
}

function validateEventForm() {
    const form = document.getElementById('event-form');
    const date = form.querySelector('#date').value;
    const subDate = form.querySelector('#sub-date').value;
    const subTime = form.querySelector('#sub-time').value;
    const startTime = form.querySelector('#startTime').value;
    const endTime = form.querySelector('#endTime').value;
    const errorSpan = form.querySelector('#time-error');

    if (date < dateToISOString(new Date())) {
        errorSpan.innerText = "Date must be in the future";
        return false; // Validation failed
    }

    if (date === dateToISOString(new Date())) {
        if (startTime < new Date().toLocaleTimeString()) {
            errorSpan.innerText = "Time must be in the future";
            return false; // Validation failed
        }
    }

    if (startTime && endTime && startTime >= endTime) {
        errorSpan.innerText = "End time must be after start time";
        return false; // Validation failed
    } 

    if (subDate ) {
        if (subDate < dateToISOString(new Date())) {
            errorSpan.innerText = "Subevent date must be in the future";
            return false; // Validation failed
        }

        if (subDate === dateToISOString(new Date())) {
            if (subTime < new Date().toLocaleTimeString()) {
                errorSpan.innerText = "Subevent time must be in the future";
                return false; // Validation failed
            }
        }
    }

    errorSpan.innerText = "";
    return true; // Validation passed
}

function submitEventForm(event) {
    event.preventDefault();

    if (!validateEventForm()) {
        console.log("Form submission prevented due to validation failure");
        return;
    }

    // Proceed with form data handling if validation passes
    const formData = new FormData(event.target);

    const calendarObject = { subevents: [] };
    formData.forEach((value, key) => {
        if (key.startsWith("sub-")) {
            const [_, field, index] = key.split("-");
            if (!calendarObject.subevents[index]) calendarObject.subevents[index] = {};
            calendarObject.subevents[index][field] = value;
        } else {
            calendarObject[key] = value;
        }
    });

    // Store Data
    const year = calendarObject.date.slice(0, 4);
    readEventsFromStorage(year);

    addEvent(calendarObject);

    localStorage.setItem(`events-${year}`, JSON.stringify(events));

    globalThis.location.href = 'calendar.html';
}

// ----------------- Event Interaction -----------------

function getEvents(date = new Date()) {
    return (events[dateToISOString(date)] ?? []).concat([]);
}

function addEvent(event) {
    if (!(event.date in events)) events[event.date] = [];
    events[event.date].push(event);
}

export { getEvents, addFormSubmitListener, readEventsFromStorage };