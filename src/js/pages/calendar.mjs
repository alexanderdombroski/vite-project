import { loadCalendar, loadEvents, renderHeaderFooter, setViewSwitchSvg } from "../components/render.mjs";
import { initCalendarNavigation } from "../components/calendar-controls.mjs";
import { loadHolidays } from  "../api/holiday.mjs"
import { mainMenuToggle } from "../components/menu-handler.js";
import { monthlyViewButton } from "../components/templates/view-switcher.mjs.mjs";

(async function loadPage() {
    renderHeaderFooter()
    await loadHolidays();
    loadCalendar();
    loadEvents();
    setViewSwitchSvg(monthlyViewButton);
})();


(function initListeners() {
    mainMenuToggle();
    initCalendarNavigation();
})();