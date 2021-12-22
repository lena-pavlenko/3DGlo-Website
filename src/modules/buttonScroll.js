const buttonScroll = () => {
    // Получаем элементы со страницы
    const main = document.querySelector('main');
    const btn = main.querySelector('[href="#service-block"]');
    const service = document.getElementById('service-block');

    // Узнаем расстояние до нужного блока
    let dist = document.documentElement.scrollTop + service.getBoundingClientRect().top;
    
    // Обрабатываем клик по кнопке
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: dist,
            behavior: "smooth"
        })
    })
}

export default buttonScroll;