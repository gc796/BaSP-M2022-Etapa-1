window.onload = function () {
    var testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var inputEmail = document.getElementById('email');
    var inputPw = document.getElementById('password');
    var btnSubmit = document.getElementById('btn-submit');
    var invalidEmail= document.querySelector('.invalid-email');
    var invalidPw = document.querySelector('.invalid-pw');
    var urlLogin = 'https://basp-m2022-api-rest-server.herokuapp.com/login';

        function validateEmail() {
        if (testEmail.test(inputEmail.value)) {
            inputEmail.classList.add('valid');
            return true;
        } else {
            invalidEmail.classList.remove('hidden');
            inputEmail.classList.add('invalid');
            return false;
        }
        
    };

    function validatePw(inputPw) {
        var stringMin = 'abcdefghijklmnopqrst';
        var stringMayus = stringMin.toUpperCase();
        var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var arrayPw = [];
        var cont1=0, cont2=0, cont3=0, contTotal=0, contPw=0;

        if (inputPw.value.length >= 8) {

            for (let index = 0; index < inputPw.length; index++) {
                arrayPw[index] = inputPw.substring(index, index + 1);
                contPw++;
            }

            for (let index = 0; index < arrayPw.length; index++) {
                for (let j = 0; j < stringMin.length; j++) {
                    if (arrayPw[index] == stringMin.substring(j, j + 1)) {
                        cont1++;
                    }
                    if (arrayPw[index] == stringMayus.substring(j, j + 1)) {
                        cont2++;
                    }
                };
                for (let k = 0; k < num.length; k++) {
                    if (arrayPw[index] == num[k]) {
                        cont3++;
                    }
                };
            };

            contTotal = cont1 + cont2 + cont3;
            if (contPw == contTotal) {
                inputPw.classList.add('valid');
                inputPw.classList.remove('invalid');
                invalidPw.classList.add('hidden');
                return true;
            } else {
                console.log('Es falsoo')
                inputPw.classList.add('invalid');
                invalidPw.classList.remove('hidden');
                return false;
            }
        } else {
        invalidPw.classList.remove('hidden');
        inputPw.classList.add('invalid');
        return false;
    };
    };

    function myRequest(urlLogin) {
        fetch(urlLogin + '?email=' + inputEmail.value + '&password=' + inputPw.value)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(
                    `
                    ${data.msg}
                    ---information---
                    Email: ${inputEmail.value}
                    Password: ${inputPw.value}
                    `
                    )

                    inputEmail.classList.add('valid');
                    inputPw.classList.add('valid');

                } else {
                    inputEmail.classList.add('invalid');
                    inputPw.classList.add('invalid');
                    throw alert(data.msg);
                }
            })
            .catch(function (error) {
                console.warn('error', error);
                }
            );
    };

    btnSubmit.addEventListener('click', e => {
        e.preventDefault();
        validateEmail();
        validatePw(inputPw);

        inputEmail.addEventListener('blur', () =>{
            if (validateEmail()) {
                inputEmail.classList.add('valid');
                inputEmail.classList.remove('invalid');
            } else {
                inputEmail.classList.add('invalid');
                inputEmail.classList.remove('valid');
            }
        });

        inputEmail.addEventListener('focus', () => {
            if (!validateEmail()) {
                invalidEmail.classList.toggle('hidden');
                inputEmail.classList.remove('invalid');
            }
        });

        inputPw.addEventListener('blur', () => {
            if (validatePw(inputPw)) {
                inputPw.classList.add('valid');
                inputPw.classList.remove('invalid');
            } else {
                inputPw.classList.add('invalid');
                inputPw.classList.remove('valid');
            }
        });

        inputPw.addEventListener('focus', () => {
            if (!validatePw(inputPw)) {
                invalidPw.classList.toggle('hidden');
                inputPw.classList.remove('invalid');
            }
        });


        if (validateEmail() && validatePw(inputPw)) {
            myRequest(urlLogin);
        }
    });
};
