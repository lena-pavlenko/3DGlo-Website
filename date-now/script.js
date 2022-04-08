const createTime = function() {

    // Создание элементов на странице
    const par1 = document.createElement('p');
    const par2 = document.createElement('p');
    const par3 = document.createElement('p');
    const par4 = document.createElement('p');

    // Размещение элементов на странице
    document.querySelector('body').append(par1);
    document.querySelector('body').append(par2);
    document.querySelector('body').append(par3);
    document.querySelector('body').append(par4);


    const updateTime = () => {

        // Получение текущих даты и времени
        let day = new Date(); 

        // Получение таймстампа
        let dateNow = day.getTime(); 
        let dateStop = new Date('1 january 2022').getTime();

        // Получение разницы между текущей датой и конечной
        let dateRemaining = (dateStop - dateNow) / 1000;

        // Получение разницы в днях
        let daysMine = Math.floor( (dateRemaining / 3600) / 24);

        // Объект для получения дня недели
        const optionsWeek = {
            weekday: 'long',
        }

        // Объект для получения времени
        const optionsTime = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }

        // Получение текущего часа
        let myHours = day.getHours();

        // Выбор приветствия в зависимости от времени суток
        const getGreeting = () => {
            if (myHours >= 4 && myHours < 12) {
        
                return 'Доброе утро'
            }
            if (myHours >= 12 && myHours < 18) {
        
                return 'Добрый день'
            }
            if (myHours >= 18 && myHours < 23) {
        
                return 'Добрый вечер'
            }
            if (myHours >= 23 && myHours < 4) {
        
                return 'Доброй ночи'
            }
            return 'Здравствуйте'
        }

        // Получение времени в формате en
        let time = day.toLocaleString('en', optionsTime);

        // Получения даты в местном формате
        dayOfWeek = day.toLocaleString('ru', optionsWeek);

        // Конкатенация переменных для вывода дня недели
        dayOfWeek = `Сегодня: ${dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1)}`;

        // Сохранение результата функции
        let greeting = getGreeting();

        // Вывод данных на страницу
        par1.textContent = greeting;
        par2.textContent = dayOfWeek;
        par3.textContent = `Текущее время: ${time}`;
        par4.textContent = `До Нового года осталось: ${daysMine} дней`;
    }
    
    // Вызываем функцию каждую секунду
    setInterval(updateTime, 1000)
}

createTime()