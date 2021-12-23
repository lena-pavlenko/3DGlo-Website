const timer = (deadline) => {

    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    const timerDays = document.getElementById('timer-days');

    // Функция для добавления нуля к дате и времени
    const addZero = dateItem => dateItem < 10 ? `0${dateItem}` : dateItem;
        

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        
        let timeRemaining = (dateStop - dateNow) / 1000;
        
        let day = Math.floor( (timeRemaining / 3600) / 24)
        let hour = Math.floor( (timeRemaining / 3600) % 24)
        let minute = Math.floor( (timeRemaining / 60) % 60);
        let second = Math.floor(timeRemaining % 60);

        return {day, hour, minute, second, timeRemaining};
    }
    
    let getTime;

    const updateDate = () => {
        getTime = getTimeRemaining();

        timerHours.textContent = addZero(getTime.hour);
        timerMinutes.textContent = addZero(getTime.minute);
        timerSeconds.textContent = addZero(getTime.second);
        timerDays.textContent = addZero(getTime.day);
    }
    updateDate();

    if (getTime.timeRemaining > 0) {
        setInterval(updateDate, 1000)
    } else {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        timerDays.textContent = '00';
    }
}

export default timer;