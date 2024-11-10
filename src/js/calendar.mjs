import { loadCalendar } from "./render.mjs";
import { initCalendarNavigation } from "./calendar-controls.mjs";
import { loadHolidays } from  "./holiday.mjs"

(async function loadPage() {
    await loadHolidays()
    loadCalendar();
})();

initCalendarNavigation()
