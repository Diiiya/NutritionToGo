exports.validateFirstName = function(myFirstName) {
    if (myFirstName.length == 0) {
        return "empty first name";
    }
    if (myFirstName.length == 1 || myFirstName.length > 40) {
        return "error in first name";
    }
    else {
        var letterNumber = /^[a-z-A-ZæøåÆØÅ ]+$/;
        if (myFirstName.match(letterNumber) && myFirstName[0] !== "-" && myFirstName[myFirstName.length - 1] !== "-" && myFirstName !== "--") {
            var repeatedDash = false;
            for (let i = 0; i < myFirstName.length; i++) {
                if (myFirstName[i] === "-") {
                    if (myFirstName[i + 1] === "-") {
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
    if (myLastName.length === 1 || myLastName.length > 60 || myLastName[0] === "-" || myLastName[myLastName.length - 1] === "-") {
        return "error in last name";
    }
    else if (myLastName.length === 0) {
        return "empty last name";
    }
    else {
        var letterNumber = /^[a-z-A-ZæøåÆØÅ ]+$/;
        if (myLastName.match(letterNumber)) {
            var repeatedDash = false;
            for (let i = 0; i < myLastName.length; i++) {
                if (myLastName[i] === "-") {
                    if (myLastName[i + 1] === "-") {
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
    if (myAddress.length === 1 || myAddress.length > 120 || myAddress[0] === "-" || myAddress[myAddress.length - 1] === "-" || myAddress[0] === "." || myAddress[myAddress.length - 1] === "," || myAddress[0] === ",") {  //twice characters next to each other
        return "error in address";
    }
    else if (myAddress.length === 0) {
        return "empty address";
    }
    else {
        var letterNumber2 = /^[a-z-.,A-ZæøåÆØÅ0-9 ]+$/;
        if (myAddress.match(letterNumber2)) {
            var repeatedDash = false;
            for (let i = 0; i < myAddress.length; i++) {
                if (myAddress[i] === "-") {
                    if (myAddress[i + 1] === "-") {
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
    if (myPostalCode.length !== 4) {
        if (myPostalCode.length === 0 || myPostalCode.length == null) {
            return "empty postal code";
        }
        else {
            return "error in postal code";
        }
    }
    else {
        var Number = /^[0-9]+$/;
        if (myPostalCode.match(Number) && (myPostalCode > 1300 && myPostalCode < 9991)) {
            return "ok";
        }
        else {
            return "error in postal code";
        }
    }
}

exports.validateCity = function(myCity) {
    if (myCity.length < 2 || myCity.length > 60 || myCity[0] === "-" || myCity[myCity.length - 1] === "-") {

        if (myCity.length === 0) {
            return "empty city";
        }
        else {
            return "error in city";
        }
    }
    else {
        var letterNumber = /^[a-z-A-ZæøåÆØÅ ]+$/;
        if (myCity.match(letterNumber)) {
            var repeatedDash = false;
            for (let i = 0; i < myCity.length; i++) {
                if (myCity[i] === "-") {
                    if (myCity[i + 1] === "-") {
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
    if (myPhoneNumber.length !== 8) {
        if (myPhoneNumber.length === 0 || myPhoneNumber == null) {
            return "empty phone number";
        }
        else {
            return "error in phone number";
        }
    }
    else {
        var Number = /^[0-9]+$/;
        if (myPhoneNumber.match(Number)) {
            return "ok";
        }
        else {
            return "error in phone number";
        }
    }
}