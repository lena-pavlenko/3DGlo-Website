const modal = () => {
    // Получаем элементы со страницы
    const modalButtons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalClose = modal.querySelector('.popup-close');
    const modalContent = modal.querySelector('.popup-content');

    // Переменные для хранения метода анимации
    let idAnimate;
    let idAnimateReverse;

    // Узнаем ширину экрана без скролла
    const widthScreen = document.documentElement.scrollWidth;

    // Показываем блок, чтобы узнать координаты контента модального окна
    modal.style.display = 'block';

    // Узнаем расстояние от блока до левого края
    let dist = modalContent.getBoundingClientRect().left;

    // Скрываем блок
    modal.style.display = 'none';

    // Узнаем расстояние до правой части экрана, чтобы скрыть контент модального окна
    const distanceModal = widthScreen - dist;

    // Объявляем счетчик движения и приравниваем его к расстоянию до края экрана
    let count = distanceModal;

    // Объявляем счетчик для обратной анимации
    let stop = 0;

    // Анимация для открытия блока
    const modalAnimate = () => {
        // Задаем счетчик движения - контролируем скорость
        count = count - 100;

        // Сохраняем метод анимации в переменной
        idAnimate = requestAnimationFrame(modalAnimate);

        // Если счетчик больше, чем координата нужного положения контента, то продолжаем анимацию
        if (count > -51) {
            modalContent.style.transform = `translateX(${count}px)`;
            
        // В ином случае останавливаем анимацию, задаем положение для контента
        } else {
            cancelAnimationFrame(idAnimate);
            modalContent.style.transform = `translateX(-50px)`;
        }
    }

    // Анимация для обратного движения контента
    const modalCloseAnimate = () => {
        // Задаем счетчик движения - контролируем скорость
        stop = stop + 100;
        
        // Сохраняем метод анимации в переменной
        idAnimateReverse = requestAnimationFrame(modalCloseAnimate);

        // Если счетчик меньше, чем координата начального положения контента, то продолжаем анимацию
        if (stop < distanceModal) {
            modalContent.style.transform = `translateX(${stop}px)`;
            
        // В ином случае останавливаем анимацию, задаем положение для контента
        } else {
            cancelAnimationFrame(idAnimateReverse);
            modalContent.style.transform = `translateX(${distanceModal}px)`;
            modal.style.display = 'none';
        }
    }
    
    // Вешаем обработчик на каждую кнопку для открытия модального окна
    modalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            // Если размер окна меньше 768px, то запускаем анимацию
            if (window.screen.width > 768) {
                count = distanceModal;
                modalContent.style.transform = `translateX(${count}px)`;
                modalAnimate();
            }
        })
    })

    // Вешаем обработчик на крестик внутри модального окна
    modalClose.addEventListener('click', () => {

        // Если размер окна меньше 768px, то запускаем анимацию
        if (window.screen.width > 768) {
            stop = 0;
            modalContent.style.transform = `translateX(${distanceModal}px)`;
            modalCloseAnimate();
        } else {
            modal.style.display = 'none';
        }
    })
}
export default modal;