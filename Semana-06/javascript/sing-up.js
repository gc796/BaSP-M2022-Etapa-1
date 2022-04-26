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

        for (let index = 0; index < name.length; index++) {
            if (isNaN(name.substring(index, index + 1))) {
                cont++;
            }  
        }
        if (cont == name.length && name.length > 3) {
            return true;
        } else {
            return false;
        }
    }

    function validateDNI() {
        if (inputDNI.value.length > 7) {
            return true;
        } else {
            return false;
        }
    }

    function validatePhone() {
        if (inputPhone.value.length == 10) {
            return true;
        } else {
            return false;
        }
    }

    function validateAddress() {
        var contSum = 0;
        var arrayAddress = [];
        var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

        if (inputAddress.value.length > 5 && contSum > 0) {
            return true;
        } else {
            return false;
        }
        
    }

    function validateLocation() {
        if (inputLocation.value.length > 3) {
            return true;
        } else {
            return false;
        }
    }

    function validatePostalCode() {
        if (inputPostalCode.value.length >= 4 && inputPostalCode.value.length <= 5) {
            return true;
        } else {
            return false;
        }
        
    }

    function validateEmail() {
        return testEmail.test(inputEmail.value);
    }

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
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

    function validatePw2(inputPw, inputPw2) {
        if (inputPw.value == inputPw2.value) {
            return true;
        } else {
            return false; 
        }
    }

    function validateAll() {
        if (
        validateFullName(inputName.value) && 
        validateFullName(inputLastName.value) && 
        validateDNI() &&
        validatePhone() &&
        validateAddress() &&
        validateLocation() &&
        validatePostalCode() &&
        validateEmail() &&
        validatePw(inputPw) &&
        validatePw2(inputPw, inputPw2)) {
            return true;
        } else {
            return false;
        }
    }

    btnCreate.addEventListener('click', e => {
        e.preventDefault();
        console.log(validateAll());
        if (validateAll()) {
            alert(
                `
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
            
        } else {
            alert(
                `
                INCORRECTO
                Name: ${inputName.value}
                Last Name: ${inputLastName.value}
                DNI: ${inputDNI.value}
                Home Addres: ${inputAddress.value}
                Location: ${inputLocation.value}
                Postal Code: ${inputPostalCode.value}
                Email: ${inputEmail.value}
                Password: ${inputPw.value}
                Password2: ${inputPw2.value}
                `
            );
        };
    });
};


