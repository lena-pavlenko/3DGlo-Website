const calculator = () => {
    // Получаем инпуты с данным классом со страницы
    const calcItems = document.querySelectorAll('input.calc-item');

    // Перебираем инпуты циклом и вешаем обработчик input
    calcItems.forEach(calcItem => {
        calcItem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/, ''); // любой символ кроме цифры заменяем на пустую строку
        })
    })
}

export default calculator;