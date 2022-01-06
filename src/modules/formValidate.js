const formValidate = () => {

    const forms = document.querySelectorAll('form[name="user_form"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    
    const regText = /[^а-яА-я\-\ ]/g;

    const regEmail = /[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g;

    const regTel = /[^\d\()\-]/g;

    const regMess = /[^\d\W]/g;

    const inputValidate = function(myInput, reg) {
        myInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(reg, '');
        })
    }

    const blurInput = function(myInput, reg) {
        myInput.addEventListener('blur', (e) => {
            let value = e.target.value;

            value = value.trim();
            value = value.replace(reg, '');
            value = value.replace(/^\-{0,}|\-{0,}$/g, '');
            value = value.replace(/^\ {0,}|\ {0,}$/g, '');

            if (e.target.getAttribute('type') === 'text' && e.target.value) {
                value = value.split(/\ +/).map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
            }

            if (e.target.getAttribute('type') !== 'email') {
                value = value.replace(/\-+/g, '-');
            }
            
            e.target.value = '';
            e.target.value = value;
        })
    }

    forms.forEach(form => {
        const inputText = form.querySelector('input[type="text"]');
        const inputEmail = form.querySelector('input[type="email"]');
        const inputTel = form.querySelector('input[type="tel"]');
    
        inputValidate(inputText, regText);
        inputValidate(inputMessage, regMess);
        inputValidate(inputEmail, regEmail);
        inputValidate(inputTel , regTel);
        
        blurInput(inputText, regText);
        blurInput(inputEmail, regEmail);
        blurInput(inputTel, regTel);
    })
}


export default formValidate;