
const events = [];

(function fillEvents() {
    const data = localStorage.getItem("events");
    if (data) {
      JSON.parse(data).forEach(item => events.push(item));
    }
})();

function addFormSubmitListener() {
    document.getElementById('event-form').addEventListener('submit', submitEventForm);
}

function submitEventForm(event) {
    event.preventDefault();
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

    events.push(calendarObject)

    localStorage.setItem("events", JSON.stringify(events));

    globalThis.location.href = 'calendar.html';
}

export { events, addFormSubmitListener };