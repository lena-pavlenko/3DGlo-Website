/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_buttonScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/buttonScroll */ \"./modules/buttonScroll.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/formValidate */ \"./modules/formValidate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 december 2021');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_buttonScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_formValidate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/buttonScroll.js":
/*!*********************************!*\
  !*** ./modules/buttonScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scrollSmooth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollSmooth */ \"./modules/scrollSmooth.js\");\n\r\n\r\nconst buttonScroll = () => {\r\n    // Получаем элементы со страницы\r\n    const main = document.querySelector('main');\r\n    const btn = main.querySelector('[href=\"#service-block\"]');\r\n    const service = document.getElementById('service-block');\r\n    \r\n    // Обрабатываем клик по кнопке\r\n    btn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        (0,_scrollSmooth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(service);\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonScroll);\n\n//# sourceURL=webpack:///./modules/buttonScroll.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    // Получаем инпуты с данным классом со страницы\r\n    const calcItems = document.querySelectorAll('input.calc-item');\r\n\r\n    // Перебираем инпуты циклом и вешаем обработчик input\r\n    calcItems.forEach(calcItem => {\r\n        calcItem.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D/, ''); // любой символ кроме цифры заменяем на пустую строку\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/formValidate.js":
/*!*********************************!*\
  !*** ./modules/formValidate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidate = () => {\r\n\r\n    const forms = document.querySelectorAll('form[name=\"user_form\"]');\r\n    const inputMessage = document.querySelector('input[placeholder=\"Ваше сообщение\"]');\r\n    \r\n    const regText = /[^а-яА-я\\-\\ ]/g;\r\n\r\n    const regEmail = /[^a-zA-Z\\@\\-\\_\\.\\!\\~\\*\\']/g;\r\n\r\n    const regTel = /[^\\d\\()\\-]/g;\r\n\r\n    const inputValidate = function(myInput, reg) {\r\n        myInput.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(reg, '');\r\n        })\r\n    }\r\n\r\n    const blurInput = function(myInput, reg) {\r\n        myInput.addEventListener('blur', (e) => {\r\n            let value = e.target.value;\r\n\r\n            value = value.trim();\r\n            value = value.replace(reg, '');\r\n            value = value.replace(/^\\-{0,}|\\-{0,}$/g, '');\r\n            value = value.replace(/^\\ {0,}|\\ {0,}$/g, '');\r\n\r\n            if (e.target.getAttribute('type') === 'text') {\r\n                value = value.split(/\\ +/).map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');\r\n            }\r\n\r\n            if (e.target.getAttribute('type') !== 'email') {\r\n                value = value.replace(/\\-+/g, '-');\r\n            }\r\n            \r\n            e.target.value = '';\r\n            e.target.value = value;\r\n        })\r\n    }\r\n\r\n    forms.forEach(form => {\r\n        const inputText = form.querySelector('input[type=\"text\"]');\r\n        const inputEmail = form.querySelector('input[type=\"email\"]');\r\n        const inputTel = form.querySelector('input[type=\"tel\"]');\r\n    \r\n        inputValidate(inputText, regText);\r\n        inputValidate(inputMessage, regText);\r\n        inputValidate(inputEmail, regEmail);\r\n        inputValidate(inputTel , regTel);\r\n        \r\n        blurInput(inputText, regText);\r\n        blurInput(inputEmail, regEmail);\r\n        blurInput(inputTel, regTel);\r\n        \r\n\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n        })\r\n    })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidate);\n\n//# sourceURL=webpack:///./modules/formValidate.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scrollSmooth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollSmooth */ \"./modules/scrollSmooth.js\");\n\r\n\r\nconst menu = () => {\r\n    // Получаем элементы со страницы\r\n    const menuBurger = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const menuClose = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul > li > a');\r\n    const services = document.getElementById('service-block');\r\n   \r\n    // Функция для открытия/закрытия меню\r\n    const handlerMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    }\r\n\r\n    // Обработчики кликов по бургер-меню и по крестику в меню\r\n    menuBurger.addEventListener('click', handlerMenu);\r\n    menuClose.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        handlerMenu();\r\n    });\r\n\r\n    // Обработка клика на каждом элементе a в пунктах меню\r\n    menuItems.forEach(menuItem => {\r\n        menuItem.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            handlerMenu();\r\n            let anchorTarget = document.querySelector(e.target.getAttribute('href'));\r\n            (0,_scrollSmooth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(anchorTarget);\r\n        })\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    // Получаем элементы со страницы\r\n    const modalButtons = document.querySelectorAll('.popup-btn');\r\n    const modal = document.querySelector('.popup');\r\n    const modalClose = modal.querySelector('.popup-close');\r\n    const modalContent = modal.querySelector('.popup-content');\r\n\r\n    // Переменные для хранения метода анимации\r\n    let idAnimate;\r\n    let idAnimateReverse;\r\n\r\n    // Узнаем ширину экрана без скролла\r\n    const widthScreen = document.documentElement.scrollWidth;\r\n\r\n    // Показываем блок, чтобы узнать координаты контента модального окна\r\n    modal.style.display = 'block';\r\n\r\n    // Узнаем расстояние от блока до левого края\r\n    let dist = modalContent.getBoundingClientRect().left;\r\n\r\n    // Скрываем блок\r\n    modal.style.display = 'none';\r\n\r\n    // Узнаем расстояние до правой части экрана, чтобы скрыть контент модального окна\r\n    const distanceModal = widthScreen - dist;\r\n\r\n    // Объявляем счетчик движения и приравниваем его к расстоянию до края экрана\r\n    let count = distanceModal;\r\n\r\n    // Объявляем счетчик для обратной анимации\r\n    let stop = 0;\r\n\r\n    // Анимация для открытия блока\r\n    const modalAnimate = () => {\r\n        // Задаем счетчик движения - контролируем скорость\r\n        count = count - 100;\r\n\r\n        // Сохраняем метод анимации в переменной\r\n        idAnimate = requestAnimationFrame(modalAnimate);\r\n\r\n        // Если счетчик больше, чем координата нужного положения контента, то продолжаем анимацию\r\n        if (count > -51) {\r\n            modalContent.style.transform = `translateX(${count}px)`;\r\n            \r\n        // В ином случае останавливаем анимацию, задаем положение для контента\r\n        } else {\r\n            cancelAnimationFrame(idAnimate);\r\n            modalContent.style.transform = `translateX(-50px)`;\r\n        }\r\n    }\r\n\r\n    // Анимация для обратного движения контента\r\n    const modalCloseAnimate = () => {\r\n        // Задаем счетчик движения - контролируем скорость\r\n        stop = stop + 100;\r\n        \r\n        // Сохраняем метод анимации в переменной\r\n        idAnimateReverse = requestAnimationFrame(modalCloseAnimate);\r\n\r\n        // Если счетчик меньше, чем координата начального положения контента, то продолжаем анимацию\r\n        if (stop < distanceModal) {\r\n            modalContent.style.transform = `translateX(${stop}px)`;\r\n            \r\n        // В ином случае останавливаем анимацию, задаем положение для контента\r\n        } else {\r\n            cancelAnimationFrame(idAnimateReverse);\r\n            modalContent.style.transform = `translateX(${distanceModal}px)`;\r\n            modal.style.display = 'none';\r\n        }\r\n    }\r\n    \r\n    // Вешаем обработчик на каждую кнопку для открытия модального окна\r\n    modalButtons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = 'block';\r\n\r\n            // Если размер окна меньше 768px, то запускаем анимацию\r\n            if (window.screen.width > 768) {\r\n                count = distanceModal;\r\n                modalContent.style.transform = `translateX(${count}px)`;\r\n                modalAnimate();\r\n            }\r\n        })\r\n    })\r\n\r\n    // Вешаем обработчик на крестик внутри модального окна\r\n    modalClose.addEventListener('click', () => {\r\n\r\n        // Если размер окна меньше 768px, то запускаем анимацию\r\n        if (window.screen.width > 768) {\r\n            stop = 0;\r\n            modalContent.style.transform = `translateX(${distanceModal}px)`;\r\n            modalCloseAnimate();\r\n        } else {\r\n            modal.style.display = 'none';\r\n        }\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollSmooth.js":
/*!*********************************!*\
  !*** ./modules/scrollSmooth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollSmooth = (anchor) => {\r\n    \r\n    let dist = document.documentElement.scrollTop + anchor.getBoundingClientRect().top;\r\n\r\n    window.scrollTo({\r\n        top: dist,\r\n        behavior: \"smooth\"\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollSmooth);\n\n//# sourceURL=webpack:///./modules/scrollSmooth.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n    const timerDays = document.getElementById('timer-days');\r\n\r\n    // Функция для добавления нуля к дате и времени\r\n    const addZero = dateItem => dateItem < 10 ? `0${dateItem}` : dateItem;\r\n        \r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        \r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        \r\n        let day = Math.floor( (timeRemaining / 3600) / 24)\r\n        let hour = Math.floor( (timeRemaining / 3600) % 24)\r\n        let minute = Math.floor( (timeRemaining / 60) % 60);\r\n        let second = Math.floor(timeRemaining % 60);\r\n\r\n        return {day, hour, minute, second, timeRemaining};\r\n    }\r\n    \r\n    let getTime;\r\n\r\n    const updateDate = () => {\r\n        getTime = getTimeRemaining();\r\n\r\n        timerHours.textContent = addZero(getTime.hour);\r\n        timerMinutes.textContent = addZero(getTime.minute);\r\n        timerSeconds.textContent = addZero(getTime.second);\r\n        timerDays.textContent = addZero(getTime.day);\r\n    }\r\n    updateDate();\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n        setInterval(updateDate, 1000)\r\n    } else {\r\n        timerHours.textContent = '00';\r\n        timerMinutes.textContent = '00';\r\n        timerSeconds.textContent = '00';\r\n        timerDays.textContent = '00';\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;