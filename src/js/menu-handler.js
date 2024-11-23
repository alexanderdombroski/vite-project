export function mainMenuToggle() {
    const menuIcon = document.querySelector('#main-menu-button');
    const menu = document.querySelector('.header-drop-down');
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
}