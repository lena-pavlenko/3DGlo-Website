const formValidate = () => {

    const forms = document.querySelectorAll('form[name="user_form"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    
    const regText = /[^а-яА-я\-\ ]/g;
    const regEmail = /[^a-zA-Z\@\-\_\.\!\~\*\']/g;
    const regTel = /[^\d\()\-]/g;

    const inputValidate = function(myInput, reg){
        myInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(reg, '');
        })
    }

    forms.forEach(form => {
        const inputText = form.querySelector('input[type="text"]');
        const inputEmail = form.querySelector('input[type="email"]');
        const inputTel = form.querySelector('input[type="tel"]');

        inputValidate(inputText, regText);
        inputValidate(inputMessage, regText);
        inputValidate(inputEmail, regEmail);
        inputValidate(inputTel , regTel);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })
    })
}


export default formValidate;