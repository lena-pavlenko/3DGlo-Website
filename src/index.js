import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import buttonScroll from "./modules/buttonScroll";
import calculator from "./modules/calculator";
import formValidate from "./modules/formValidate";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer('25 december 2021');
menu();
modal();
buttonScroll();
calculator(100);
formValidate();
tabs();
slider('portfolio-content', 'portfolio-item', 'portfolio-dots', 'dot-active', 'portfolio-item-active', 'portfolio-btn', 'arrow-left', 'arrow-right');

sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});