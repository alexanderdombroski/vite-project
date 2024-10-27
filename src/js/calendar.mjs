import { loadCalendar, loadHolidays } from "./render.mjs";
import getHolidays from "./holiday.mjs";

(async function loadPage() {
    loadCalendar();

    const holidays = await getHolidays();
    loadHolidays(holidays);
})();

