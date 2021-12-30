import { animate } from "./helpers";

const modal = () => {
    // Получаем элементы со страницы
    const modalButtons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector('.popup-content');

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
    
    // Вешаем обработчик на каждую кнопку для открытия модального окна
    modalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';

            // Если размер окна больше 768px, то запускаем анимацию
            if (window.screen.width > 768) {
                animate({
                    duration: 300,
                    timing(timeFraction) {
                      return 1 - timeFraction;
                    },
                    draw(progress) {
                        modalContent.style.transform = `translateX(${ ( (progress * distanceModal) - 50) }px)`;
                    }
                });
            }
        })
    })

    // Вешаем обработчик события на модальное окно
    modal.addEventListener('click', (e) => {

        // Реализуем закрытие модального окна по клику по пустому месту и крестику
        // Проверяем, не содержит ли текущий элемент или ближайший его родитель нужный класс 
        // или текущий элемент является крестиком
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {

            // Если размер окна больше 768px, то запускаем анимацию
            if (window.screen.width > 768) {
                animate({
                    duration: 300,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        modalContent.style.transform = `translateX(${ ( (progress * distanceModal) ) }px)`;
                    }
                })
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 350)
            } else {
                modal.style.display = 'none';
            }
        }
    })
}
export default modal;