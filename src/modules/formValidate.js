const formValidate = () => {

    const forms = document.querySelectorAll('form[name="user_form"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    const msg = document.createElement('p');
    
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
                if (e.target.value.length >= 2) {
                    value = value.split(/\ +/).map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
                    e.target.setCustomValidity('')
                } else {
                    e.target.setCustomValidity('Имя должно содержать 2 и более символа, кириллицу, дефис или пробел');
                }
            }

            if (e.target.getAttribute('type') === 'tel') {
                if (e.target.value.length < 11) {
                    e.target.setCustomValidity('Телефон должен содержать не менее 11 символов, цифры, (), -');
                } else {
                    e.target.setCustomValidity('');
                }
            }

            if (e.target.getAttribute('type') === 'email') {
                if (e.target.value.match(/[^а-я]+\S+@\S+[^а-я]+\.\S+[^а-я]+/gi) && e.target.value.length > 0) {
                    e.target.setCustomValidity('');
                } else {
                    e.target.setCustomValidity("Email должен быть в формате ababa@ababa.ab, содержать латиницу, цифры,_.!~*'");
                }
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