const tabs = () => {

    // Получаем элементы со страницы
    const tabContent = document.querySelectorAll('.service-tab');
    const tabHeader = document.querySelector('.service-header');
    const tabs = document.querySelectorAll('.service-header-tab');

    // Обрабатываем клик по родительскому блоку, используя делегирование
    tabHeader.addEventListener('click', (e) => {

        // Проверяем, содержит ли ближайший родительский (или текущий) блок определенный класс
        if (e.target.closest('.service-header-tab')) {
            const closestTab = e.target.closest('.service-header-tab');

            // Перебираем табы циклом
            tabs.forEach((tab, index) => {
                // Если текущий таб равен блоку с нужным классом
                if (tab === closestTab) {
                    // Добавляем класс для переключения стилей и показываем нужный контент
                    tab.classList.add('active');
                    tabContent[index].classList.remove('d-none');
                } else {
                    // Иначе удаляем класс для стилей и скрываем контент
                    tab.classList.remove('active');
                    tabContent[index].classList.add('d-none');
                }
            })
        }
    })
}

export default tabs;