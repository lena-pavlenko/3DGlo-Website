import scrollSmooth from "./scrollSmooth";

const menu = () => {
    // Получаем элементы со страницы
    const menuBurger = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const menuClose = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');
    const services = document.getElementById('service-block');
   
    // Функция для открытия/закрытия меню
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    }

    // Обработчики кликов по бургер-меню и по крестику в меню
    menuBurger.addEventListener('click', handlerMenu);
    menuClose.addEventListener('click', (e) => {
        e.preventDefault();
        handlerMenu();
    });

    // Обработка клика на каждом элементе a в пунктах меню
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            e.preventDefault();
            handlerMenu();
            let anchorTarget = document.querySelector(e.target.getAttribute('href'));
            scrollSmooth(anchorTarget);
        })
    });
}

export default menu;