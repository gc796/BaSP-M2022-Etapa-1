window.onload = function () {
    var testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var inputName = document.getElementById('name');
    var inputLastName = document.getElementById('lastname');
    var inputDNI = document.getElementById('dni');
    var inputPhone = document.getElementById('phone-number');
    var inputAddress = document.getElementById('home-address');
    var inputLocation = document.getElementById('location');
    var inputPostalCode = document.getElementById('postal-code');
    var inputEmail = document.getElementById('email');
    var inputPw = document.getElementById('password');
    var inputPw2 = document.getElementById('password2');
    var btnCreate = document.getElementById('btn-create');

    function validateFullName(name) {
        var cont=0;
        
        for (let index = 0; index < name.value.length; index++) {
            if (isNaN(name.value.substring(index, index + 1))) {
                cont++;
            }  
        }
        if (cont == name.value.length && name.value.length > 3) {
            name.classList.add('valid');
            return true;
        } else {
            name.classList.add('invalid');
            return false;
        }
    };

    function validateDNI() {
        if (inputDNI.value.length > 7) {
            inputDNI.classList.add('valid');
            return true;
        } else {
            inputDNI.classList.add('invalid');
            return false;
        }
    };

    function validatePhone() {
        if (inputPhone.value.length == 10) {
            inputPhone.classList.add('valid');
            return true;
        } else {
            inputPhone.classList.add('invalid');
            return false;
        }
    };

    function validateAddress() {
        var arrayAddress = [];
        var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var contSum = 0;
        var flag;

        for (let index = 0; index < inputAddress.value.length; index++) {
            arrayAddress[index] = inputAddress.value[index];
        }

        for (let index = 0; index < inputAddress.value.length; index++) {
            for (let j = 0; j < num.length; j++) {
                if (arrayAddress[index] == num[j]) {
                contSum++;
                }
            }
        }
        if (inputAddress.value.indexOf(" ") == -1) {
            flag = false;
        } else {
            flag = true;
        }

        if (inputAddress.value.length > 5 && contSum > 0 && flag) {
            inputAddress.classList.add('valid');
            return true;
        } else {
            inputAddress.classList.add('invalid');
            return false;
        }
        
    };

    function validateLocation() {
        if (inputLocation.value.length > 3) {
            inputLocation.classList.add('valid');
            return true;
        } else {
            inputLocation.classList.add('invalid');
            return false;
        }
    };

    function validatePostalCode() {
        if (inputPostalCode.value.length >= 4 && inputPostalCode.value.length <= 5) {
            inputPostalCode.classList.add('valid');
            return true;
        } else {
            inputPostalCode.classList.add('invalid');
            return false;
        }
    };

    function validateEmail() {
        if (testEmail.test(inputEmail.value)) {
            inputEmail.classList.add('valid');
            return true;
        } else {
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

    if (inputPw.value.length > 8) {
        
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
            return true;
        } else {
            inputPw.classList.add('invalid');
            return false;
        }
    } else {
        inputPw.classList.add('invalid');
        return false;
    }
};

    function validatePw2(inputPw, inputPw2) {
        if (inputPw.value == inputPw2.value && inputPw2.value.length > 0) {
            inputPw2.classList.add('valid');
            return true;
        } else {
            inputPw2.classList.add('invalid');
            return false;
        }
    };

    btnCreate.addEventListener('click', e => {
        e.preventDefault();
        validateFullName(inputName);
        validateFullName(inputLastName);
        validateDNI();
        validatePhone();
        validateAddress();
        validateLocation();
        validatePostalCode();
        validateEmail();
        validatePw(inputPw);
        validatePw2(inputPw, inputPw2);

        inputName.addEventListener('blur', () => {
            if (validateFullName(inputName)) {
                inputName.classList.add('valid');
                inputName.classList.remove('invalid');
            } else {
                inputName.classList.add('invalid');
                inputName.classList.remove('valid');
            }
        });
        inputName.addEventListener('focus', () => {
            if (!validateFullName(inputName)) {
                inputName.classList.remove('invalid');
            }
        } );

        inputLastName.addEventListener('blur', () => {
            if (validateFullName(inputLastName)) {
                inputLastName.classList.add('valid');
                inputLastName.classList.remove('invalid');
            } else {
                inputLastName.classList.add('invalid');
                inputLastName.classList.remove('valid');
            }
        });
        inputLastName.addEventListener('focus', () => {
            if (!validateFullName(inputLastName)) {
                inputLastName.classList.remove('invalid');
            }
        } );

        inputDNI.addEventListener('blur',() => {
            if (validateDNI()) {
                inputDNI.classList.add('valid');
                inputDNI.classList.remove('invalid');
            } else {
                inputDNI.classList.add('invalid');
                inputDNI.classList.remove('valid');
            }
        });
        inputDNI.addEventListener('focus', () => {
            if (!validateDNI()) {
                inputDNI.classList.remove('invalid');
            }
        });

        inputPhone.addEventListener('blur', () =>{
            if (validatePhone()) {
                inputPhone.classList.add('valid');
                inputPhone.classList.remove('invalid');
            } else {
                inputPhone.classList.add('invalid');
                inputPhone.classList.remove('valid');
            }
        });

        inputPhone.addEventListener('focus', () => {
            if (!validatePhone()) {
                inputPhone.classList.remove('invalid');
            }
        });

        inputAddress.addEventListener('blur', () =>{
            if (validateAddress()) {
                inputAddress.classList.add('valid');
                inputAddress.classList.remove('invalid');
            } else {
                inputAddress.classList.add('invalid');
                inputAddress.classList.remove('valid');
            }
        });

        inputAddress.addEventListener('focus', () => {
            if (!validateAddress()) {
                inputAddress.classList.remove('invalid');
            }
        });

        inputLocation.addEventListener('blur', () => {
            if (validateLocation()) {
                inputLocation.classList.add('valid');
                inputLocation.classList.remove('invalid');
            } else {
                inputLocation.classList.add('invalid');
                inputLocation.classList.remove('valid');
            }
        });

        inputLocation.addEventListener('focus', () => {
            if (!validateLocation()) {
                inputLocation.classList.remove('invalid');
            }
        });

        inputPostalCode.addEventListener('blur', () => {
            if (validatePostalCode()) {
                inputPostalCode.classList.add('valid');
                inputPostalCode.classList.remove('invalid');
            } else {
                inputPostalCode.classList.add('invalid');
                inputPostalCode.classList.remove('valid');
            }
        });

        inputPostalCode.addEventListener('focus', () => {
            if (!validatePostalCode()) {
                inputPostalCode.classList.remove('invalid');
            }
        });

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
                inputPw.classList.remove('invalid');
            }
        });

        inputPw2.addEventListener('blur', () => {
            if (validatePw2(inputPw, inputPw2)) {
                inputPw2.classList.add('valid');
                inputPw2.classList.remove('invalid');
            } else {
                inputPw2.classList.add('invalid');
                inputPw2.classList.remove('valid');
            }
        });

        inputPw2.addEventListener('focus', () => {
            if (!validatePw2(inputPw, inputPw2)) {
                inputPw2.classList.remove('invalid');
            }
        });


            alert(
                `
                ---information---
                Name: ${inputName.value}
                Last Name: ${inputLastName.value}
                DNI: ${inputDNI.value}
                Phone: ${inputPhone.value}
                Home Addres: ${inputAddress.value}
                Location: ${inputLocation.value}
                Postal Code: ${inputPostalCode.value}
                Email: ${inputEmail.value}
                Password: ${inputPw.value}
                Password2: ${inputPw2.value}
                `
            );
        });
    };


