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

    // Переменная для хранения последнего значения суммы
    let lastTotal = 0;

    // Перебираем инпуты циклом и вешаем обработчик input
    calcItems.forEach(calcItem => {
        calcItem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/, ''); // любой символ кроме цифры заменяем на пустую строку
        })
    })

    // Функция debounce принимает в качестве аргумента функцию, которая запускается на обработчике события
    const debounce = (callback) => {
        let timeout;
        return (argument) => {
            clearTimeout(timeout);
            timeout = setTimeout(callback, 700, argument);
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
        // Выводим итоговую стоимость на страницу

        // Если  последнее значение не равно текущей сумме, то цифры "бегут",
        // анимация начинается с последнего значения
        if (lastTotal !== totalValue) {
            if (lastTotal < totalValue) {
            
                animate({
                    duration: 700,
                    timing (timeFraction) {
                        
                        return Math.pow (timeFraction, 2);
                    },
                    draw (progress) {
                        console.log(lastTotal);
                        totalSum.textContent = Math.floor((totalValue - lastTotal) * progress + lastTotal);
                        if (progress == 1){
                            lastTotal = totalValue;
                        }
                    }
                });
            }
    
            if (lastTotal > totalValue) {
                animate({
                    duration: 700,
                    timing (timeFraction) {
                        return Math.pow (timeFraction, 2);
                    },
                    draw (progress) {
                        totalSum.textContent = -Math.floor((lastTotal - totalValue) * progress - lastTotal);
                        if (progress == 1){
                            lastTotal = totalValue;
                        }
                    }
                });
            }
        }
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