window.onload = function () {

var testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var inputEmail = document.getElementById('email');
var inputPw = document.getElementById('password');
var btnSubmit = document.getElementById('btn-submit');
var invalidEmail= document.querySelector('.invalid-email');
var invalidPw = document.querySelector('.invalid-pw');

function validatePw(inputPw) {
    var stringMin = 'abcdefghijklmnopqrst';
    var stringMayus = stringMin.toUpperCase();
    var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var arrayPw = [];
    var cont1=0, cont2=0, cont3=0, contTotal=0, contPw=0;

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
        return true;
    } else {
        return false;
    }
};

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    if (testEmail.test(inputEmail.value) && validatePw(inputPw.value)) {
        alert(`Se registró correctamente con el email: ${inputEmail.value} y la password ${inputPw.value}`);
        if (inputEmail.classList.contains('error')) {
            inputEmail.classList.toggle('error');
        } else if (inputPw.classList.contains('error')) {
            inputPw.classList.toggle('error');
        }
    };

    if (testEmail.test(inputEmail.value) == false) {
        alert('Debe ingresar un email válido');
        inputEmail.classList.add('error');
        invalidEmail.classList.remove('hidden');

        inputEmail.addEventListener('blur', () => {
            if (testEmail.test(inputEmail.value)) {
                inputEmail.classList.remove('error');
                invalidEmail.classList.add('hidden');
            } else {
                inputEmail.classList.add('error');
                invalidEmail.classList.remove('hidden');
            }
        });

        inputEmail.addEventListener('focus', () => {
            if (inputEmail.classList.contains('error')) {
                inputEmail.classList.toggle('error');
                invalidEmail.classList.toggle('hidden');
            }
        });
    } else {
        inputEmail.classList.remove('error');
    }; 

    if (validatePw(inputPw.value) == false) {
        alert('Debe ingresar un password válido');
        inputPw.classList.add('error');
        invalidPw.classList.remove('hidden');

        inputPw.addEventListener('blur', () => {
            if (validatePw(inputPw.value)) {
                inputPw.classList.remove('error');
                invalidPw.classList.add('hidden');
            } else {
                inputPw.classList.add('error');
                invalidPw.classList.remove('hidden');
            }
        });

        inputPw.addEventListener('focus', () => {
            if (inputPw.classList.contains('error')) {
                inputPw.classList.toggle('error');
                invalidPw.classList.add('hidden');
            }
        });
    } else {
        inputPw.classList.remove('error');
    };
});
};
