const slider = (sliderClass, slideClass, dotWrapperClass, dotClass = 'dot-active', slideActiveClass = 'slide-active', arrowClass, arrowLeftId, arrowRightId) => {

    if (!sliderClass || !slideClass || !dotWrapperClass) {
        return;
    } else {
        // Получение элементов со страницы
        const sliderBlock = document.querySelector(`.${sliderClass}`);
        const sliderItems = document.querySelectorAll(`.${slideClass}`);
        const dotsWrapper = document.querySelector(`.${dotWrapperClass}`);
    
        if (!sliderBlock || !sliderItems || !dotsWrapper) {
            return;
        } else {

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
            dots[0].classList.add(`${dotClass}`);

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
                
                prevSlide(sliderItems, sliderIndex, `${slideActiveClass}`);
                prevSlide(dots, sliderIndex, `${dotClass}`);

                sliderIndex++;

                // Если счетчик становится больше или равен количеству слайдов, то обнуляем его
                if (sliderIndex >= sliderItems.length) {
                    sliderIndex = 0;
                }

                nextSlide(sliderItems, sliderIndex, `${slideActiveClass}`);
                nextSlide(dots, sliderIndex, `${dotClass}`);
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
                if (!e.target.matches(`.${arrowClass}, .dot`)) {
                    return;
                }

                // Удаляем активные классы
                prevSlide(sliderItems, sliderIndex, `${slideActiveClass}`);
                prevSlide(dots, sliderIndex, `${dotClass}`);

                // Проверяем клик
                if (e.target.matches(`#${arrowRightId}`)) {
                    sliderIndex++;
                } else if (e.target.matches(`#${arrowLeftId}`)) {
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
                nextSlide(sliderItems, sliderIndex, `${slideActiveClass}`);
                nextSlide(dots, sliderIndex, `${dotClass}`);
            })

            // Останавливаем автопереключение по наведнию мыши на стрелку или точку
            sliderBlock.addEventListener('mouseenter', (e) => {
                if (e.target.matches(`.${arrowClass}, .dot`)) {
                    stopSlide();
                }
            }, true)

            // Запускаем автопереключение при перемещении мыши от стрелок и точек
            sliderBlock.addEventListener('mouseleave', (e) => {
                if (e.target.matches(`.${arrowClass}, .dot`)) {
                    startSlide(intervalTime);
                }
            }, true)

            // Запуск слайдера
            startSlide(intervalTime);
        }
    }

    
}

export default slider;