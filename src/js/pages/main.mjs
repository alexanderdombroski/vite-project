import { getCountryList } from "../api/holiday.mjs";
import { countryFormTemplate } from "../components/templates/templates.mjs";
import { mainMenuToggle } from "../components/menu-handler.js";
import p1 from '../../images/planner1.webp';
import p2 from '../../images/planner2.avif';
import { renderHeaderFooter } from "../components/render.mjs";

renderHeaderFooter();

function changeHeroImage() {
    const heroImage = document.querySelector('#home-hero-image');
    heroImage.src = globalThis.innerWidth < 1000 ? p2 : p1;
}

function handleCountryFormSubmit() {
    const countryForm = document.querySelector('#country-form');
    
    countryForm.addEventListener('submit', e => {
        e.preventDefault();
        const countryCode = document.querySelector('#country-select').value;

        // Check if a country was selected
        if (!countryCode){
            alert('Please select a country');
            return;
        } else {
            // Save selected country to local storage
            localStorage.setItem('selectedCountry', countryCode);

            // Redirect to calendar page
            globalThis.location.href = './calendar.html';
        }
    });
}

(async function addCountryForm() {
    const countryList = await getCountryList();
    const countryForm = document.querySelector('#country-form-options');
    countryForm.insertAdjacentHTML('beforeend', countryFormTemplate(countryList));
    handleCountryFormSubmit();
    mainMenuToggle();
})();

(function initListeners(){
    globalThis.addEventListener('resize', changeHeroImage);
    globalThis.addEventListener('load', changeHeroImage);
    globalThis.addEventListener('DOMContentLoaded', changeHeroImage);
})();