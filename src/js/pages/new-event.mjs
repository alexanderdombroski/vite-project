import { mainMenuToggle } from "../components/menu-handler.js";
import { loadEventForm, renderHeaderFooter } from "../components/render.mjs"
import { addFormSubmitListener } from "../api/event-manager.mjs";

(function initListeners() {
    renderHeaderFooter();
    mainMenuToggle();
    loadEventForm();
    addFormSubmitListener();
})();

