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

function submitEventForm(event) {
    event.preventDefault();
    
    // Handle Form Data
    const formData = new FormData(event.target);

    const calendarObject = {subevents: []};
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

    const year = calendarObject.date.slice(0,4);
    readEventsFromStorage(year);

    addEvent(calendarObject);

    localStorage.setItem(`events-${year}`, JSON.stringify(events));
    
    globalThis.location.href = 'calendar.html';
}

// ----------------- Event Interaction -----------------

function getEvents(date = new Date()) {
    return (events[dateToISOString(defaultYear(date))] ?? []).concat([]);
}

function addEvent(event) {
    if (!(event.date in events)) events[event.date] = [];
    events[event.date].push(event);
}

export { getEvents, addFormSubmitListener, readEventsFromStorage };