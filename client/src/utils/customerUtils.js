exports.validateFirstName = function(myFirstName) {
    if (myFirstName.value.length == 0) {
        return "empty first name";
    }
    if (myFirstName.value.length == 1 || myFirstName.value.length > 40) {
        return "error in first name";
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
                return "ok";

            }
            else {
                return "repeated dash in first name";
            }
        }
        else {
            return "error in first name";
        }
    }

}

exports.validateLastName = function(myLastName) {
    if (myLastName.value.length === 1 || myLastName.value.length > 60 || myLastName.value[0] === "-" || myLastName.value[myLastName.value.length - 1] === "-") {
        return "error in last name";
    }
    else if (myLastName.value.length === 0) {
        return "empty last name";
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
                return "ok";
            }
            else {
                return "repeated dash in last name";
            }
        }
        else {
            return "error in last name";
        }
    }
}

exports.validateAddress = function(myAddress) {
    if (myAddress.value.length === 1 || myAddress.value.length > 120 || myAddress.value[0] === "-" || myAddress.value[myAddress.value.length - 1] === "-" || myAddress.value[0] === "." || myAddress.value[myAddress.value.length - 1] === "," || myAddress.value[0] === ",") {  //twice characters next to each other
        return "error in address";
    }
    else if (myAddress.value.length === 0) {
        return "empty address";
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
                return "ok";
            }
            else {
                return "repeated dash in address";
            }
        }
        else {
            return "error in address";
        }
    }
}

exports.validatePostalCode = function(myPostalCode) {
    if (myPostalCode.value.length !== 4) {
        if (myPostalCode.value.length === 0) {
            return "empty postal code";
        }
        else {
            return "error in postal code";
        }
    }
    else {
        var Number = /^[0-9]+$/;
        if (myPostalCode.value.match(Number) && (myPostalCode.value > 1300 && myPostalCode.value < 9991)) {
            return "ok";
        }
        else {
            return "error in postal code";
        }
    }
}

exports.validateCity = function(myCity) {
    if (myCity.value.length < 2 || myCity.value.length > 60 || myCity.value[0] === "-" || myCity.value[myCity.value.length - 1] === "-") {

        if (myCity.value.length === 0) {
            return "empty city";
        }
        else {
            return "error in city";
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
                return "ok";
            }
            else {
                return "repeated dash in city";
            }
        }
        else {
            return "error in city";
        }
    }
}

exports.validatePhoneNumber = function(myPhoneNumber) {
    if (myPhoneNumber.value.length !== 8) {
        if (myPhoneNumber.value.length === 0) {
            return "empty phone number";
        }
        else {
            return "error in phone number";
        }
    }
    else {
        var Number = /^[0-9]+$/;
        if (myPhoneNumber.value.match(Number)) {
            return "ok";
        }
        else {
            return "error in phone number";
        }
    }
}