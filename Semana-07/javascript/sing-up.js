window.onload = function () {
    var testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var inputName = document.getElementById('name');
    var inputLastName = document.getElementById('lastname');
    var inputDNI = document.getElementById('dni');
    var inputDate = document.getElementById('date');
    var inputPhone = document.getElementById('phone-number');
    var inputAddress = document.getElementById('home-address');
    var inputLocation = document.getElementById('location');
    var inputPostalCode = document.getElementById('postal-code');
    var inputEmail = document.getElementById('email');
    var inputPw = document.getElementById('password');
    var inputPw2 = document.getElementById('password2');
    var btnCreate = document.getElementById('btn-create');
    var invalidName = document.querySelector('.invalid-name');
    var invalidLastName = document.querySelector('.invalid-lastname');
    var invalidDNI = document.querySelector('.invalid-dni');
    var invalidDate = document.querySelector('.invalid-date');
    var invalidPhone = document.querySelector('.invalid-phone');
    var invalidAddress = document.querySelector('.invalid-address');
    var invalidLocation = document.querySelector('.invalid-location');
    var invalidPostaCode = document.querySelector('.invalid-postalcode');
    var invalidEmail = document.querySelector('.invalid-email');
    var invalidPw = document.querySelector('.invalid-pw');
    var invalidPw2 = document.querySelector('.invalid-pw2');
    var urlSignUp = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
    var ls = localStorage;

    function validateFullName(name, invalidField) {
        var cont = 0;

        for (var index = 0; index < name.value.length; index++) {
            if (isNaN(name.value.substring(index, index + 1))) {
                cont++;
            }
        };
        if (cont == name.value.length && name.value.length > 3) {
            name.classList.add('valid');
            return true;
        } else {
            invalidField.classList.remove('hidden');
            name.classList.add('invalid');
            return false;
        };
    };

    function validateDNI() {
        var dni = inputDNI.value;
        var contNum=0;

        for (var index = 0; index < dni.length; index++) {
            if (!isNaN(dni.substring(index,index+1))) {
                contNum++;
            }  
        };

        if (dni.length >= 7 && dni.length <= 8 && contNum == dni.length) {
            inputDNI.classList.add('valid');
            return true;
        } else {
            invalidDNI.classList.remove('hidden');
            inputDNI.classList.add('invalid');
            return false;
        };
    };

    function validateDate() {
        var stringDate = inputDate.value;
        var month = stringDate.substring(0,2);
        var slash = stringDate.substring(2,3);
        var day = stringDate.substring(3, 5);
        var secondSlash = stringDate.substring(5, 6);
        var year = stringDate.substring(6, 10);

        if (stringDate.length == 10 &&
            month > 0 && month <= 12 &&
            slash == '/' &&
            day > 0 && day <= 31 &&
            secondSlash == '/' &&
            year > 1900 && year < 2020) {
            inputDate.classList.add('valid');
            return true;
        } else {
            inputDate.classList.add('invalid');
            invalidDate.classList.remove('hidden');
            return false;
        };
    };

    function validatePhone() {
        var contNum=0;
        var phone = inputPhone.value;

        for (var index = 0; index < phone.length; index++) {
            if (!isNaN(phone.substring(index, index + 1)) && phone.substring(index, index + 1) != ' ') {
                contNum++;
            }
        };
        if (phone.length == 10 && contNum == 10) {
            inputPhone.classList.add('valid');
            return true;
        } else {
            invalidPhone.classList.remove('hidden');
            inputPhone.classList.add('invalid');
            return false;
        };
    };

    function validateAddress() {
        var flag;
        var adress = inputAddress.value;
        var contNum=0;

        for (var index = 0; index < adress.length; index++) {
            if (!isNaN(adress.substring(index, index + 1))) {
                contNum++;
            };
        };

        if (adress.indexOf(" ") == -1 || 
            adress.indexOf(" ") == 0 || 
            adress.substring(adress.length - 1) == ' ') {
            flag = false;
        } else {
            flag = true;
        };

        if (adress.length > 5 && contNum > 0 && flag) {
            inputAddress.classList.add('valid');
            return true;
        } else {
            invalidAddress.classList.remove('hidden');
            inputAddress.classList.add('invalid');
            return false;
        };
    };

    function validateLocation() {
        if (inputLocation.value.length > 3) {
            inputLocation.classList.add('valid');
            return true;
        } else {
            invalidLocation.classList.remove('hidden');
            inputLocation.classList.add('invalid');
            return false;
        };
    };

    function validatePostalCode() {
        var contNum=0;
        var postalCode = inputPostalCode.value;

        for (var index = 0; index < postalCode.length; index++) {
            if (!isNaN(postalCode.substring(index, index + 1)) && postalCode.substring(index, index + 1) != ' ') {
                contNum++;
            }
        };
        if (postalCode.length >= 4 && postalCode.length <= 5 && contNum == postalCode.length) {
            inputPostalCode.classList.add('valid');
            return true;
        } else {
            invalidPostaCode.classList.remove('hidden');
            inputPostalCode.classList.add('invalid');
            return false;
        };
    };

    function validateEmail() {
        if (testEmail.test(inputEmail.value)) {
            inputEmail.classList.add('valid');
            return true;
        } else {
            invalidEmail.classList.remove('hidden');
            inputEmail.classList.add('invalid');
            return false;
        };
    };

    function validatePw(inputPw) {
        var stringMin = 'abcdefghijklmnopqrst';
        var stringMayus = stringMin.toUpperCase();
        var num = ['0', 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var arrayPw = [];
        var contMin = 0, contMayus = 0, contvarters = 0, contNum = 0, contTotal = 0, contPw = 0;

        if (inputPw.value.length >= 8) {
            for (var index = 0; index < inputPw.value.length; index++) {
                arrayPw[index] = inputPw.value.substring(index, index + 1);
                contPw++;
            }
            for (var index = 0; index < arrayPw.length; index++) {
                for (var j = 0; j < stringMin.length; j++) {
                    if (arrayPw[index] == stringMin.substring(j, j + 1)) {
                        contMin++;
                    }
                    if (arrayPw[index] == stringMayus.substring(j, j + 1)) {
                        contMayus++;
                    };
                };
                for (var k = 0; k < num.length; k++) {
                    if (arrayPw[index] == num[k]) {
                        contNum++;
                    };
                };
            };

            contvarters = contMin + contMayus;
            contTotal = contvarters + contNum;
            if (contvarters >= 1 && contNum >= 1 && contPw == contTotal) {
                inputPw.classList.add('valid');
                inputPw.classList.remove('invalid');
                invalidPw.classList.add('hidden');
                return true;
            } else {
                inputPw.classList.add('invalid');
                invalidPw.classList.remove('hidden');
                return false;
            };
        } else {
            invalidPw.classList.remove('hidden');
            inputPw.classList.add('invalid');
            return false;
        };
    };

    function validatePw2(inputPw, inputPw2) {
        if (inputPw.value == inputPw2.value && inputPw2.value.length > 0) {
            inputPw2.classList.add('valid');
            invalidPw2.classList.add('hidden');
            return true;
        } else {
            invalidPw2.classList.remove('hidden');
            inputPw2.classList.add('invalid');
            return false;
        };
    };

    function saveLS() {
        if (ls.getItem('name') == null &&
            ls.getItem('last name') == null &&
            ls.getItem('date') == null &&
            ls.getItem('dni') == null &&
            ls.getItem('phone') == null &&
            ls.getItem('address') == null &&
            ls.getItem('location') == null &&
            ls.getItem('postal code') == null &&
            ls.getItem('email') == null &&
            ls.getItem('password') == null) {
                ls.setItem('name', inputName.value);
                ls.setItem('last name', inputLastName.value);
                ls.setItem('date', inputDate.value);
                ls.setItem('dni', inputDNI.value);
                ls.setItem('phone', inputPhone.value);
                ls.setItem('address', inputAddress.value);
                ls.setItem('location', inputLocation.value);
                ls.setItem('postal code', inputPostalCode.value);
                ls.setItem('email', inputEmail.value);
                ls.setItem('password', inputPw.value);
        } else {
            alert('There is already a user saved in local storage')
        }
    }

    function signupRequest(urlSignUp) {
        fetch(urlSignUp + '?name=' + inputName.value + '&lastName=' + inputLastName.value + '&dni=' + inputDNI.value + '&dob=' + inputDate.value + '&phone=' + inputPhone.value + '&address=' + inputAddress.value + '&city=' + inputLocation.value + '&zip=' + inputPostalCode.value + '&email=' + inputEmail.value + '&password=' + inputPw.value)
        .then(response => response.json())
        .then(data => {
            if (data.success && validatePw2(inputPw, inputPw2)) {
                alert(
                    `
                    Congratulations, your registration was successful!
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
                    `
                );
                saveLS();
            } else {
                var alertErrors='';
                for (var index = 0; index < data.errors.length; index++) {
                    alertErrors = `${alertErrors} 
                                -${data.errors[index].msg}`;
                }
                throw alert('Error:'+ alertErrors);
            };
        })
        .catch(function (error) {
            console.warn('error', error);
        }
        );
    };

    function setInputsLS() {
        inputName.value = ls.getItem('name');
        inputLastName.value = ls.getItem('last name');
        inputDate.value = ls.getItem('date');
        inputDNI.value = ls.getItem('dni');
        inputPhone.value = ls.getItem('phone');
        inputAddress.value = ls.getItem('address');
        inputLocation.value = ls.getItem('location');
        inputPostalCode.value = ls.getItem('postal code');
        inputEmail.value = ls.getItem('email');
        inputPw.value = ls.getItem('password');
    }

    setInputsLS()

    btnCreate.addEventListener('click', e => {
        e.preventDefault();
        validateFullName(inputName, invalidName);
        validateFullName(inputLastName, invalidLastName);
        validateDate();
        validateDNI();
        validatePhone();
        validateAddress();
        validateLocation();
        validatePostalCode();
        validateEmail();
        validatePw(inputPw);
        validatePw2(inputPw, inputPw2);

        inputName.addEventListener('blur', () => {
            if (validateFullName(inputName, invalidName)) {
                inputName.classList.add('valid');
                inputName.classList.remove('invalid');
            } else {
                inputName.classList.add('invalid');
                inputName.classList.remove('valid');
            }
        });
        inputName.addEventListener('focus', () => {
            if (!validateFullName(inputName, invalidName)) {
                invalidName.classList.toggle('hidden');
                inputName.classList.remove('invalid');
            }
        });

        inputLastName.addEventListener('blur', () => {
            if (validateFullName(inputLastName, invalidLastName)) {
                inputLastName.classList.add('valid');
                inputLastName.classList.remove('invalid');
            } else {
                inputLastName.classList.add('invalid');
                inputLastName.classList.remove('valid');
            }
        });
        inputLastName.addEventListener('focus', () => {
            if (!validateFullName(inputLastName, invalidLastName)) {
                invalidLastName.classList.toggle('hidden');
                inputLastName.classList.remove('invalid');
            }
        });

        inputDate.addEventListener('blur', () => {
            if (validateDate()) {
                inputDate.classList.add('valid');
                inputDate.classList.remove('invalid');
            } else {
                inputDate.classList.add('invalid');
                inputDate.classList.remove('valid');
            }
        });
        inputDate.addEventListener('focus', () => {
            if (!validateDate()) {
                invalidDate.classList.toggle('hidden');
                inputDate.classList.remove('invalid');
            }
        });

        inputDNI.addEventListener('blur', () => {
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
                invalidDNI.classList.toggle('hidden');
                inputDNI.classList.remove('invalid');
            }
        });

        inputPhone.addEventListener('blur', () => {
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
                invalidPhone.classList.toggle('hidden');
                inputPhone.classList.remove('invalid');
            }
        });

        inputAddress.addEventListener('blur', () => {
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
                invalidAddress.classList.toggle('hidden');
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
                invalidLocation.classList.toggle('hidden');
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
                invalidPostaCode.classList.toggle('hidden');
                inputPostalCode.classList.remove('invalid');
            }
        });

        inputEmail.addEventListener('blur', () => {
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
            if (validatePw(inputPw) && validatePw2(inputPw, inputPw2)) {
                inputPw.classList.add('valid');
                inputPw.classList.remove('invalid');
                inputPw2.classList.add('valid');
                inputPw2.classList.remove('invalid');
            } else {
                inputPw.classList.add('invalid');
                inputPw.classList.remove('valid');
                inputPw2.classList.add('invalid');
                inputPw2.classList.remove('valid');
            }
        });

        inputPw.addEventListener('focus', () => {
            if (!validatePw(inputPw) && !validatePw2(inputPw, inputPw2)) {
                invalidPw.classList.toggle('hidden');
                inputPw.classList.remove('invalid');
                invalidPw2.classList.toggle('hidden');
                inputPw2.classList.remove('invalid');
            }
        });
        inputPw2.addEventListener('blur', () => {
            if (validatePw(inputPw) && validatePw2(inputPw, inputPw2)) {
                inputPw.classList.add('valid');
                inputPw.classList.remove('invalid');
                inputPw2.classList.add('valid');
                inputPw2.classList.remove('invalid');
            } else {
                inputPw.classList.add('invalid');
                inputPw.classList.remove('valid');
                inputPw2.classList.add('invalid');
                inputPw2.classList.remove('valid');
            }
        });

        inputPw2.addEventListener('focus', () => {
            if (!validatePw(inputPw) && !validatePw2(inputPw, inputPw2)) {
                invalidPw.classList.toggle('hidden');
                inputPw.classList.remove('invalid');
                invalidPw2.classList.toggle('hidden');
                inputPw2.classList.remove('invalid');
            }
        });

        signupRequest(urlSignUp);

    });
};
