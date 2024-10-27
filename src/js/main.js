let heroImage = document.querySelector('#home-hero-image');


function changeImage() {
    if (window.innerWidth < 1000) {
        heroImage.src = './images/planner2.avif';
    } else {
        heroImage.src = './images/planner1.webp';
    }
}

function init(){
    window.addEventListener('resize', changeImage);
    window.addEventListener('load', changeImage);
    window.addEventListener('DOMContentLoaded', changeImage);
}

init();