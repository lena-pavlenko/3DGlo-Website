import { scrollSmooth } from "./helpers";

const menu = () => {
    // Получаем элементы со страницы
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');
   
    // Функция для открытия/закрытия меню
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    }

    // Вешаем обработчик события на body
    body.addEventListener('click', (e) => {

        // Проверяем, есть ли у ближайшего родителя текущего элемента нужный класс
        if (e.target.closest('.menu')) {
            handlerMenu();
        }

        // Проверяем, есть ли у ближайшего родителя текущего элемента нужные теги
        if (e.target.tagName === 'A' && e.target.closest('menu')) {
            e.preventDefault(); // Отключаем стандартное поведение
            handlerMenu();

            // Проверяем, является ли текущий элемент элементом списка
            if (e.target.closest('li')) {

                // Получаем значение тега href
                let anchorTarget = document.querySelector(e.target.getAttribute('href'));
                // Запускаем функцию плавной прокрутки до блока с нужным id
                scrollSmooth(anchorTarget);
            } 
        }
        
        // Проверяем, если у текущего элемента нет ближайших родителей с данными селекторами
        if (!e.target.closest('menu') && !e.target.closest('.menu')) {
            // То скрываем меню
            menu.classList.remove('active-menu')
        }
    })
}

export default menu;