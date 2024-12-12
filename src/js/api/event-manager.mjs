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

function isPastDate(inputDate) {
    const todayISO = new Date().toISOString().split('T')[0];
    return inputDate < todayISO;
}

function validateEventForm() {
    const form = document.getElementById('event-form');
    const date = form.querySelector('#date').value;
    const subDate = form.querySelector('#sub-date');
    const subTime = form.querySelector('#sub-time');
    const startTime = form.querySelector('#startTime').value;
    const endTime = form.querySelector('#endTime').value;
    const errorSpan = form.querySelector('#time-error');

    if (!date) {
        errorSpan.innerText = "Date is required";
        return false;
    }

    if (!startTime) {
        errorSpan.innerText = "Start time is required";
        return false;
    }

    if (!endTime) {
        errorSpan.innerText = "End time is required";
        return false;
    }

    if (isPastDate(date)) {
        errorSpan.innerText = "Date must be in the future";
        return false;
    }

    if (startTime >= endTime) {
        errorSpan.innerText = "End time must be after start time";
        return false;
    }

    if (subDate) {

        subdate = subDate.value;
        subtime = subTime.value;

        if (isPastDate(subDate)) {
            errorSpan.innerText = "Subevent date must be in the future";
            return false;
        }
    }

    errorSpan.innerText = "";
    return true;
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