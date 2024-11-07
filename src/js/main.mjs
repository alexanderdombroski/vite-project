import { getCountryList } from "./holiday.mjs";
import { countryFormTemplate } from "./templates.mjs";

function changeHeroImage() {
    const heroImage = document.querySelector('#home-hero-image');
    heroImage.src = globalThis.innerWidth < 1000 ? './images/planner2.avif' : './images/planner1.webp';
}

(async function init() {
    const countryList = await getCountryList();
    const countryForm = document.querySelector('#country-form');
    countryForm.insertAdjacentHTML('beforeend', countryFormTemplate(countryList));
})();

(function initListeners(){
    globalThis.addEventListener('resize', changeHeroImage);
    globalThis.addEventListener('load', changeHeroImage);
    globalThis.addEventListener('DOMContentLoaded', changeHeroImage);
})();