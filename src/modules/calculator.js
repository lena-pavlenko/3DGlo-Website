import { animate } from "./helpers";

const calculator = (price = 100) => {
    // Получаем элементы
    const calcItems = document.querySelectorAll('input.calc-item');
    const calcWrapper = document.querySelector('.calc-block');
    const calcSelect = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcRooms = document.querySelector('.calc-count');
    const calcDays = document.querySelector('.calc-day');
    const totalSum = document.getElementById('total');


    // Перебираем инпуты циклом и вешаем обработчик input
    calcItems.forEach(calcItem => {
        calcItem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/, ''); // любой символ кроме цифры заменяем на пустую строку
        })
    })

    // Функция для анимации перебора чисел
    // const animateNumber = (elem, num) => {
    //     const time = 500;
    //     let step = num / 10;
    //     let n = 0;

    //     let temp = Math.round(time / (num / step));
        
    //     let interval = setInterval(() => {

    //         if (n >= num) {
    //             clearInterval(interval);
    //             return false;
    //         }
            
    //         n = n + step;
    //         elem.textContent = Math.floor(n);
    //     }, temp)
    // }

    // Функция debounce принимает в качестве аргумента функцию, которая запускается на обработчике события
    const debounce = (callback) => {
        let timeout;
        return (argument) => {
            clearTimeout(timeout);
            timeout = setTimeout(callback, 500, argument);
        };
    }

    // Расчет суммы
    const countCalc = () => {
        // Получаем значение выбранной опции и значение площади
        const selectValue = +calcSelect.options[calcSelect.selectedIndex].value;
        const squareValue = +calcSquare.value;

        // Объявляем переменные для расчетов
        let totalValue = 0;
        let roomsValue = 1;
        let daysValue = 1;
        
        // Проверяем количество комнат и рассчитываем коэффициент
        if (calcRooms.value > 1) {
            roomsValue += +calcRooms.value / 10;
        }

        // Проверяем количество дней и рассчитываем коэффициент
        if (calcDays.value && calcDays.value < 5) {
            daysValue = 2;
        } else if (calcDays.value && calcDays.value < 10) {
            daysValue = 1.5;
        }

        // Проверяем, чтобы селект и инпут площади были обязательно заполнены и производим расчет стоимости
        if (selectValue && squareValue) {
            totalValue = price * selectValue * squareValue * roomsValue * daysValue;
        } else {
            totalValue = 0;
        }
        // Выводим итоговую стоимость на страницы
        animate({
            duration: 700,
            timing (timeFraction) {
                return Math.pow (timeFraction, 2);
            },
            draw (progress) {
                totalSum.textContent = Math.floor(progress * totalValue)
            }
        });
    }

    // Сохраняем результат debounce в переменной
    const debouncedOnInput = debounce(countCalc);

    // Обрабатываем событие инпут
    calcWrapper.addEventListener('input', (e) => {
        // Если событие срабатывает на выбранном элементе, то запускаем функцию расчета
        if (e.target === calcSelect || e.target === calcSquare ||
            e.target === calcRooms || e.target === calcDays) {
                debouncedOnInput();
        }
    })
}

export default calculator;