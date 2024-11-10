import { getHolidays } from "./holiday.mjs";
import { getDateFromString } from "./timereader.mjs";

const events = [];

(function LoadEvents() {
    // TODO load calendar events from local storage

})();


(async function LoadHolidays() {
    // TODO add holidays to calendar events
    const holidays = await getHolidays();
    holidays.forEach(h => events.push({ name: h.name, date: getDateFromString(h.date), repeat: "year" }));
})();


export default events;