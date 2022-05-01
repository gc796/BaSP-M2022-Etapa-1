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

    function validateFullName(name, invalidField) {
        var cont = 0;

        for (let index = 0; index < name.value.length; index++) {
            if (isNaN(name.value.substring(index, index + 1))) {
                cont++;
            }
        }
        if (cont == name.value.length && name.value.length > 3) {
            name.classList.add('valid');
            return true;
        } else {
            invalidField.classList.remove('hidden');
            name.classList.add('invalid');
            return false;
        }
    };

    inputDate.setAttribute("onkeypress", "return validateNumers(event)");
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
        }
    }

    inputDNI.setAttribute("onkeypress", "return validateNumers2(event)");
    function validateDNI() {
        if (inputDNI.value.length >= 7 && inputDNI.value.length <= 8) {
            inputDNI.classList.add('valid');
            return true;
        } else {
            invalidDNI.classList.remove('hidden');
            inputDNI.classList.add('invalid');
            return false;
        }
    };

    inputPhone.setAttribute("onkeypress", "return validateNumers2(event)");
    function validatePhone() {
        if (inputPhone.value.length == 10) {
            inputPhone.classList.add('valid');
            return true;
        } else {
            invalidPhone.classList.remove('hidden');
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
            invalidAddress.classList.remove('hidden');
            inputAddress.classList.add('invalid');
            return false;
        }

    };

    function validateLocation() {
        if (inputLocation.value.length > 3) {
            inputLocation.classList.add('valid');
            return true;
        } else {
            invalidLocation.classList.remove('hidden');
            inputLocation.classList.add('invalid');
            return false;
        }
    };

    inputPostalCode.setAttribute("onkeypress", "return validateNumers2(event)");
    function validatePostalCode() {
        if (inputPostalCode.value.length >= 4 && inputPostalCode.value.length <= 5) {
            inputPostalCode.classList.add('valid');
            return true;
        } else {
            invalidPostaCode.classList.remove('hidden');
            inputPostalCode.classList.add('invalid');
            return false;
        }
    };

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
        var contMin = 0, contMayus = 0, contLetters = 0, contNum = 0, contTotal = 0, contPw = 0;

        if (inputPw.value.length >= 8) {
            for (var index = 0; index < inputPw.value.length; index++) {
                arrayPw[index] = inputPw.value.substring(index, index + 1);
                contPw++;
            }
            for (let index = 0; index < arrayPw.length; index++) {
                for (let j = 0; j < stringMin.length; j++) {
                    if (arrayPw[index] == stringMin.substring(j, j + 1)) {
                        contMin++;
                    }
                    if (arrayPw[index] == stringMayus.substring(j, j + 1)) {
                        contMayus++;
                    }
                };
                for (let k = 0; k < num.length; k++) {
                    if (arrayPw[index] == num[k]) {
                        contNum++;
                    }
                };
            };

            contLetters = contMin + contMayus;
            contTotal = contLetters + contNum;
            if (contLetters >= 1 && contNum >= 1 && contPw == contTotal) {
                inputPw.classList.add('valid');
                inputPw.classList.remove('invalid');
                invalidPw.classList.add('hidden');
                return true;
            } else {
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

    function validatePw2(inputPw, inputPw2) {
        if (inputPw.value == inputPw2.value && inputPw2.value.length > 0) {
            inputPw2.classList.add('valid');
            return true;
        } else {
            invalidPw2.classList.remove('hidden');
            inputPw2.classList.add('invalid');
            return false;
        }
    };

    function signupRequest(urlSignUp) {
        fetch(urlSignUp + '?name=' + inputName.value + '&lastName=' + inputLastName.value + '&dni=' + inputDNI.value + '&dob=' + inputDate.value + '&phone=' + inputPhone.value + '&addres=' + inputAddress.value + '&city=' + inputLocation.value + '&zip=' + inputPostalCode.value + '&email=' + inputEmail.value + '&password=' + inputPw.value
        )
            .then(response => response.json())
            .then(data => {
                if (data.success) {
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
                } else {
                    throw alert(data.msg);
                }
            })
            .catch(function (error) {
                console.warn('error', error);
            }
            );;
    }

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
                invalidPw2.classList.toggle('hidden');
                inputPw2.classList.remove('invalid');
            }
        });

        signupRequest(urlSignUp);
    });
};

function validateNumers(event) {
    if (event.charCode >= 47 && event.charCode <= 57) {
        return true;
    }
    return false;
}

function validateNumers2(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
}