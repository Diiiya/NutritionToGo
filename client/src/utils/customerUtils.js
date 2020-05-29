exports.validate = function (errorClass, successClass, myFirstName, myLastName, myAddress, myPostalCode, myCity, myPhoneNumber) {
    var validFirstName = validateFirstName(errorClass, successClass, myFirstName);

    if (validFirstName) {
        var validLastName = validateLastName(errorClass, successClass, myLastName);

        if (validLastName) {
            var validAddress = validateAddress(errorClass, successClass, myAddress);

            if (validAddress) {
                var validPostalCode = validatePostalCode(errorClass, successClass, myPostalCode);

                if (validPostalCode) {
                    var validCity = validateCity(errorClass, successClass, myCity);

                    if (validCity) {
                        var validPhoneNumber = validatePhoneNumber(errorClass, successClass, myPhoneNumber);
                        if (validPhoneNumber) {
                            localStorage.setItem("firstName", myFirstName.value);
                            localStorage.setItem("lastName", myLastName.value);
                            localStorage.setItem("address", myAddress.value);
                            localStorage.setItem("postalCode", myPostalCode.value);
                            localStorage.setItem("city", myCity.value);
                            localStorage.setItem("phoneNumber", myPhoneNumber.value);
                            return true;
                        }
                    }
                }
            }
        }

    }
    else {
        return false;
    }
}

//=============================================First Name=====================================================
function validateFirstName(errorClass, successClass, myFirstName) {
    if (myFirstName.value.length == 0) {
        alert("empty first name");
        return false;
    }
    if (myFirstName.value.length == 1 || myFirstName.value.length > 40) {
        myFirstName.className = errorClass;
        alert("error in first name");
        return false;
    }
    else {
        var letterNumber = /^[a-z-A-ZæøåÆØÅ ]+$/;
        if (myFirstName.value.match(letterNumber) && myFirstName.value[0] !== "-" && myFirstName.value[myFirstName.value.length - 1] !== "-" && myFirstName.value !== "--") {
            var repeatedDash = false;
            for (let i = 0; i < myFirstName.value.length; i++) {
                if (myFirstName.value[i] === "-") {
                    if (myFirstName.value[i + 1] === "-") {
                        repeatedDash = true;
                    }
                }
            }

            if (repeatedDash === false) {
                myFirstName.className = successClass;
                return true;

            }
            else {
                myFirstName.className = errorClass;
                alert("repeated dash in first name");
                repeatedDash = false;
                return false
            }
        }
        else {
            myFirstName.className = errorClass;
            alert("error in first name");
            return false;
        }
    }

}

function validateLastName(errorClass, successClass, myLastName) {
    //=============================================Last Name=====================================================
    if (myLastName.value.length === 1 || myLastName.value.length > 60 || myLastName.value[0] === "-" || myLastName.value[myLastName.value.length - 1] === "-") {
        myLastName.className = errorClass;
        alert("error in last name")
        return false;
    }
    else if (myLastName.value.length === 0) {
        alert("empty last name");
        return false;
    }
    else {
        var letterNumber = /^[a-z-A-ZæøåÆØÅ ]+$/;
        if (myLastName.value.match(letterNumber)) {
            var repeatedDash = false;
            for (let i = 0; i < myLastName.value.length; i++) {
                if (myLastName.value[i] === "-") {
                    if (myLastName.value[i + 1] === "-") {
                        repeatedDash = true;
                    }
                }
            }

            if (repeatedDash === false) {
                myLastName.className = successClass;
                return true;
            }
            else {
                myLastName.className = errorClass;
                alert("repeated dash in last name");
                repeatedDash = false;
                return false;
            }
        }
        else {
            myLastName.className = errorClass;
            alert("error in last name");
            return false;
        }
    }
}

//=============================================Address=====================================================
function validateAddress(errorClass, successClass, myAddress) {
    if (myAddress.value.length === 1 || myAddress.value.length > 120 || myAddress.value[0] === "-" || myAddress.value[myAddress.value.length - 1] === "-" || myAddress.value[0] === "." || myAddress.value[myAddress.value.length - 1] === "," || myAddress.value[0] === ",") {  //twice characters next to each other
        myAddress.className = errorClass;
        alert("error in address");
        return false;
    }
    else if (myAddress.value.length === 0) {
        alert("empty address");
        return false;
    }
    else {
        var letterNumber2 = /^[a-z-.,A-ZæøåÆØÅ0-9 ]+$/;
        if (myAddress.value.match(letterNumber2)) {
            var repeatedDash = false;
            for (let i = 0; i < myAddress.value.length; i++) {
                if (myAddress.value[i] === "-") {
                    if (myAddress.value[i + 1] === "-") {
                        repeatedDash = true;
                    }
                }
            }

            if (repeatedDash === false) {
                myAddress.className = successClass;
                return true;
            }
            else {
                myAddress.className = errorClass;
                alert("repeated dash in address");
                repeatedDash = false;
                return false;
            }
        }
        else {
            myAddress.className = errorClass;
            alert("error in address");
            return false;
        }
    }
}

//=============================================Postal Code=====================================================
function validatePostalCode(errorClass, successClass, myPostalCode) {
    if (myPostalCode.value.length !== 4) {
        if (myPostalCode.value.length === 0) {
            alert("empty postal code");
            return false;
        }
        else {
            myPostalCode.className = errorClass;
            alert("error in postal code");
            return false;
        }

    }
    else {
        var Number = /^[0-9]+$/;
        if (myPostalCode.value.match(Number) && (myPostalCode.value > 1300 && myPostalCode.value < 9991)) {

            myPostalCode.className = successClass;
            return true;

        }
        else {
            myPostalCode.className = errorClass;
            alert("error in postal code");
            return false;
        }
    }

}

//=============================================City=====================================================
function validateCity(errorClass, successClass, myCity) {
    if (myCity.value.length < 2 || myCity.value.length > 60 || myCity.value[0] === "-" || myCity.value[myCity.value.length - 1] === "-") {

        if (myCity.value.length === 0) {
            alert("empty city");
            return false;
        }
        else {
            myCity.className = errorClass;
            alert("error in city");
            return false;
        }
    }
    else {
        var letterNumber = /^[a-z-A-ZæøåÆØÅ ]+$/;
        if (myCity.value.match(letterNumber)) {
            var repeatedDash = false;
            for (let i = 0; i < myCity.value.length; i++) {
                if (myCity.value[i] === "-") {
                    if (myCity.value[i + 1] === "-") {
                        repeatedDash = true;
                    }
                }
            }

            if (repeatedDash === false) {
                myCity.className = successClass;
                return true;

            }
            else {
                myCity.className = errorClass;
                alert("repeated dash in city");
                repeatedDash = false;
                return false;
            }
        }
        else {
            myCity.className = errorClass;
            alert("error in city");
            return false;
        }
    }
}

//=============================================Phone Number=====================================================
function validatePhoneNumber(errorClass, successClass, myPhoneNumber) {
    if (myPhoneNumber.value.length !== 8) {
        if (myPhoneNumber.value.length === 0) {
            alert("empty phone number");
            return false;
        }
        else {
            myPhoneNumber.className = errorClass;
            alert("error in phone number");
            return false;
        }
    }
    else {
        var Number = /^[0-9]+$/;
        if (myPhoneNumber.value.match(Number)) {
            myPhoneNumber.className = successClass;
            return true;
        }
        else {
            myPhoneNumber.className = errorClass;
            alert("error in phone number");
            return false;
        }
    }
}