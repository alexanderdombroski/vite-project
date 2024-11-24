import { loadCalendar, loadEvents } from "../components/render.mjs";
import { initCalendarNavigation } from "../components/calendar-controls.mjs";
import { loadHolidays } from  "../api/holiday.mjs"
import { mainMenuToggle } from "../components/menu-handler.js";

(async function loadPage() {
    await loadHolidays()
    loadCalendar();
    loadEvents();
    mainMenuToggle();
    initCalendarNavigation()
})();

