import { scrollSmooth } from "./helpers";

const buttonScroll = () => {
    // Получаем элементы со страницы
    const main = document.querySelector('main');
    const btn = main.querySelector('[href="#service-block"]');
    const service = document.getElementById('service-block');
    
    // Обрабатываем клик по кнопке
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollSmooth(service);
    })
}

export default buttonScroll;