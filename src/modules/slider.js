const slider = () => {

    // Получение элементов со страницы
    const sliderBlock = document.querySelector('.portfolio-content');
    const sliderItems = document.querySelectorAll('.portfolio-item');
    const dotsWrapper = document.querySelector('.portfolio-dots');

    // Создание точек в зависимости от количества слайдов
    const createDots = () => {
        for (let i = 0; i < sliderItems.length; i++) {
            let dot = document.createElement('li');
            dot.className = 'dot';
            dotsWrapper.append(dot);
        }
    }
    
    createDots();

    // Получение массива точек
    const dots = document.querySelectorAll('.dot');
    // Первая точка активная
    dots[0].classList.add('dot-active');

    // Счетчик для смены слайдов
    let sliderIndex = 0;
    let interval;
    let intervalTime = 2000;

    // Функция для удаления активного класса
    const prevSlide = (elems, index, elemClass) => {
        elems[index].classList.remove(elemClass);
    }

    // Функция для добавления активного класса
    const nextSlide = (elems, index, elemClass) => {
        elems[index].classList.add(elemClass);
    }

    // Автопереключение слайдов
    const autoSlide = () => {
        
        prevSlide(sliderItems, sliderIndex, 'portfolio-item-active');
        prevSlide(dots, sliderIndex, 'dot-active');

        sliderIndex++;

        // Если счетчик становится больше или равен количеству слайдов, то обнуляем его
        if (sliderIndex >= sliderItems.length) {
            sliderIndex = 0;
        }

        nextSlide(sliderItems, sliderIndex, 'portfolio-item-active');
        nextSlide(dots, sliderIndex, 'dot-active');
    }

    // Запуск слайдера
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    // Остановка переключения слайдов
    const stopSlide = () => {
        clearInterval(interval);
    }

    // Событие клика по стрелкам и точкам
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        // Если блок не содержит данных классов, то ничего не делаем
        if (!e.target.matches('.portfolio-btn, .dot')) {
            return;
        }

        // Удаляем активные классы
        prevSlide(sliderItems, sliderIndex, 'portfolio-item-active');
        prevSlide(dots, sliderIndex, 'dot-active');

        // Проверяем клик
        if (e.target.matches('#arrow-right')) {
            sliderIndex++;
        } else if (e.target.matches('#arrow-left')) {
            sliderIndex--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    sliderIndex = index;
                }
            })
        }

        // Обнуляем счетчик
        if (sliderIndex >= sliderItems.length) {
            sliderIndex = 0;
        }

        // Или возвращаем на последний слайд
        if (sliderIndex < 0) {
            sliderIndex = sliderItems.length - 1;
        }

        // Добавляем активные классы
        nextSlide(sliderItems, sliderIndex, 'portfolio-item-active');
        nextSlide(dots, sliderIndex, 'dot-active');
    })

    // Останавливаем автопереключение по наведнию мыши на стрелку или точку
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.portfolio-btn, .dot')) {
            stopSlide();
        }
    }, true)

    // Запускаем автопереключение при перемещении мыши от стрелок и точек
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.portfolio-btn, .dot')) {
            startSlide(intervalTime);
        }
    }, true)

    // Запуск слайдера
    startSlide(intervalTime);
}

export default slider;