import { loadCalendar, renderHeaderFooter, setViewSwitchSvg } from "../components/render.mjs";
import { initCalendarNavigation } from "../components/calendar-controls.mjs";
import { loadHolidays } from  "../api/holiday.mjs";
import { readEventsFromStorage } from "../api/event-manager.mjs";
import { mainMenuToggle } from "../components/menu-handler.js";
import { monthlyViewButton } from "../components/templates/view-switcher.mjs.mjs";

(async function loadPage() {
    renderHeaderFooter()
    await loadHolidays();
    readEventsFromStorage();
    loadCalendar();
    setViewSwitchSvg(monthlyViewButton);
})();

(function initListeners() {
    mainMenuToggle();
    initCalendarNavigation();
})();