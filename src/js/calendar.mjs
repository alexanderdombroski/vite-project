import { loadCalendar } from "./render.mjs";
import { initCalendarNavigation } from "./calendar-controls.mjs";
import { loadHolidays } from  "./holiday.mjs"
import { mainMenuToggle } from "./menu-handler.js";

(async function loadPage() {
    await loadHolidays()
    loadCalendar();
    mainMenuToggle();
})();

initCalendarNavigation()
