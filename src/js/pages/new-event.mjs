import { mainMenuToggle } from "../components/menu-handler.js";
import { loadEventForm } from "../components/render.mjs"
import { addFormSubmitListener } from "../components/event-manager.mjs";

(function initListeners() {
    mainMenuToggle();
    loadEventForm();
    addFormSubmitListener();
})();

