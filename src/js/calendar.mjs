import { loadCalendar, loadHolidays } from "./render.mjs";
import { getHolidays } from "./holiday.mjs";
import { initCalendarNavigation } from "./calendar-controls.mjs";

(async function loadPage() {
    loadCalendar();

    const holidays = await getHolidays();
    loadHolidays(holidays);
})();

(function initListeners() {
    initCalendarNavigation()
})();