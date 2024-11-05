const heroImage = document.querySelector('#home-hero-image');


function changeImage() {
    heroImage.src = globalThis.innerWidth < 1000 ? './images/planner2.avif' : './images/planner1.webp';
}

(function initListeners(){
    globalThis.addEventListener('resize', changeImage);
    globalThis.addEventListener('load', changeImage);
    globalThis.addEventListener('DOMContentLoaded', changeImage);
})();