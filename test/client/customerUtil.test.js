const customerUtil = require('../../client/src/utils/customerUtil');
const validateFirstName = customerUtil.validateFirstName;
const validateLastName = customerUtil.validateLastName;
const validateAddress = customerUtil.validateAddress;
const validatePostalCode = customerUtil.validatePostalCode;
const validateCity = customerUtil.validateCity;
const validatePhoneNumber = customerUtil.validatePhoneNumber;

const assert = require('chai').assert;

describe('validateFirstName() tests', function() {

    it('First name is empty. Test should return error message "empty first name"', () => {

        let actual = validateFirstName("");
        let expected = "empty first name"; 

        assert.equal(actual, expected);
    })

    it('First name is a single character. Test should return error message "error in first name"', () => {

        let actual = validateFirstName("a");
        let expected = "error in first name"; 

        assert.equal(actual, expected);
    })

    it('First name is 2 characters. Test should pass with the message "ok"', () => {

        let actual = validateFirstName("aa");
        let expected = "ok"; 

        assert.equal(actual, expected);
    })

    it('First name is 40 characters. Test should pass with the message "ok"', () => {

        let actual = validateFirstName("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        let expected = "ok"; 

        assert.equal(actual, expected);
    })

    it('First name is 41 characters. Test should return error message "error in first name"', () => {

        let actual = validateFirstName("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        let expected = "error in first name"; 

        assert.equal(actual, expected);
    })

    it('First name is a single character and a dash. Test should return error message "error in first name"', () => {

        let actual = validateFirstName("a-");
        let expected = "error in first name"; 

        assert.equal(actual, expected);
    })

    it('First name is two dashes. Test should return error message "error in first name"', () => {

        let actual = validateFirstName("--");
        let expected = "error in first name"; 

        assert.equal(actual, expected);
    })

    it('First name is two letters separated by a dash. Test should pass with the message "ok"', () => {

        let actual = validateFirstName("a-a");
        let expected = "ok"; 

        assert.equal(actual, expected);
    })

    it('First name is two letters and a number. Test should return error message "error in first name"', () => {

        let actual = validateFirstName("aa1");
        let expected = "error in first name"; 

        assert.equal(actual, expected);
    })

    it('First name is two letters seperated with two dashes. Test should return error message "repeated dash in first name"', () => {

        let actual = validateFirstName("a--a");
        let expected = "repeated dash in first name"; 

        assert.equal(actual, expected);
    })

})

describe('validateLastName() tests', function() {

    it('Last name is empty. Test should return error message "empty last name"', () => {

        let actual = validateLastName("");
        let expected = "empty last name"; 

        assert.equal(actual, expected);
    })

    it('Last name is a single character. Test should return error message "error in last name"', () => {

        let actual = validateLastName("a");
        let expected = "error in last name"; 

        assert.equal(actual, expected);
    })

    it('Last name is 2 characters. Test should pass with the message "ok"', () => {

        let actual = validateLastName("aa");
        let expected = "ok"; 

        assert.equal(actual, expected);
    })

    it('Last name is 60 characters. Test should pass with the message "ok"', () => {

        let actual = validateLastName("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        let expected = "ok"; 

        assert.equal(actual, expected);
    })

    it('Last name is 61 characters. Test should return error message "error in last name"', () => {

        let actual = validateLastName("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        let expected = "error in last name"; 

        assert.equal(actual, expected);
    })

    it('Last name is a single character and a dash. Test should return error message "error in last name"', () => {

        let actual = validateLastName("a-");
        let expected = "error in last name"; 

        assert.equal(actual, expected);
    })

    it('Last name is two dashes. Test should return error message "error in last name"', () => {

        let actual = validateLastName("--");
        let expected = "error in last name"; 

        assert.equal(actual, expected);
    })

    it('Last name is two letters separated by a dash. Test should pass with the message "ok"', () => {

        let actual = validateLastName("a-a");
        let expected = "ok"; 

        assert.equal(actual, expected);
    })

    it('Last name is two letters and a number. Test should return error message "error in last name"', () => {

        let actual = validateLastName("aa1");
        let expected = "error in last name"; 

        assert.equal(actual, expected);
    })

    it('Last name is two letters seperated with two dashes. Test should return error message "repeated dash in last name"', () => {

        let actual = validateLastName("a--a");
        let expected = "repeated dash in last name"; 

        assert.equal(actual, expected);
    })

})

describe('validateAddress() tests', function() {

    it('Address is empty. Test should return error message "empty address"', () => {

        let actual = validateAddress("");
        let expected = "empty address"; 

        assert.equal(actual, expected);
    })

    it('Address is a single character. Test should return error message "error in address"', () => {

        let actual = validateAddress("a");
        let expected = "error in address"; 

        assert.equal(actual, expected);
    })

    it('Address is 2 characters. Test should pass with the message "ok"', () => {

        let actual = validateAddress("aa");
        let expected = "ok";

        assert.equal(actual, expected);
    })

    it('Address is 120 characters. Test should pass with the message "ok"', () => {

        let actual = validateAddress("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        let expected = "ok";

        assert.equal(actual, expected);
    })

    it('Address is 121 characters. Test should return error message "error in address"', () => {

        let actual = validateAddress("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        let expected = "error in address";

        assert.equal(actual, expected);
    })

    it('Address is two characters separated by a dash. Test should pass with the message "ok"', () => {

        let actual = validateAddress("a-a");
        let expected = "ok";

        assert.equal(actual, expected);
    })

    it('Address is two characters separated by two dashes. Test should return error message "repeated dash in address"', () => {

        let actual = validateAddress("a--a");
        let expected = "repeated dash in address";

        assert.equal(actual, expected);
    })

    it('Address is two numbers. Test should pass with the message "ok"', () => {

        let actual = validateAddress("12");
        let expected = "ok";

        assert.equal(actual, expected);
    })
})

describe('validatePostalCode() tests', function() {

    it('Postal code is empty. Test should return error message "empty postal code"', () => {

        let actual = validatePostalCode("");
        let expected = "empty postal code";

        assert.equal(actual, expected);
    })

    it('Postal code is 4 characters. Test should return error message "error in postal code"', () => {

        let actual = validatePostalCode("aaaa");
        let expected = "error in postal code";

        assert.equal(actual, expected);
    })

    it('Postal code is string 1300. Test should return error message "error in postal code"', () => {

        let actual = validatePostalCode("1300");
        let expected = "error in postal code";

        assert.equal(actual, expected);
    })

    it('Postal code is string 9991. Test should return error message "error in postal code"', () => {

        let actual = validatePostalCode("9991");
        let expected = "error in postal code";

        assert.equal(actual, expected);
    })

    it('Postal code is string 5000. Test should pass with the message "ok"', () => {

        let actual = validatePostalCode("5000");
        let expected = "ok";

        assert.equal(actual, expected);
    })

})

describe('validateCity() tests', function() {

    it('City is empty. Test should return error message "empty city"', () => {

        let actual = validateCity("");
        let expected = "empty city"; 

        assert.equal(actual, expected);
    })

    it('City is a single character. Test should return error message "error in city"', () => {

        let actual = validateCity("a");
        let expected = "error in city"; 

        assert.equal(actual, expected);
    })

    it('City is 2 characters. Test should pass with the message "ok"', () => {

        let actual = validateCity("aa");
        let expected = "ok"; 

        assert.equal(actual, expected);
    })

    it('City is 60 characters. Test should pass with the message "ok"', () => {

        let actual = validateCity("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        let expected = "ok"; 

        assert.equal(actual, expected);
    })

    it('City is 61 characters. Test should return error message "error in city"', () => {

        let actual = validateCity("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        let expected = "error in city"; 

        assert.equal(actual, expected);
    })

    it('City is a single character and a dash. Test should return error message "error in city"', () => {

        let actual = validateCity("a-");
        let expected = "error in city"; 

        assert.equal(actual, expected);
    })

    it('City is two dashes. Test should return error message "error in city"', () => {

        let actual = validateCity("--");
        let expected = "error in city"; 

        assert.equal(actual, expected);
    })

    it('City is two letters separated by a dash. Test should pass with the message "ok"', () => {

        let actual = validateCity("a-a");
        let expected = "ok"; 

        assert.equal(actual, expected);
    })

    it('City is two letters and a number. Test should return error message "error in city"', () => {

        let actual = validateCity("aa1");
        let expected = "error in city"; 

        assert.equal(actual, expected);
    })

    it('City is two letters seperated with two dashes. Test should return error message "repeated dash in city"', () => {

        let actual = validateCity("a--a");
        let expected = "repeated dash in city"; 

        assert.equal(actual, expected);
    })

})

describe('validatePhoneNumber() tests', function() {

    it('Phone number is empty. Test should return error message "empty phone number"', () => {

        let actual = validatePhoneNumber("");
        let expected = "empty phone number";

        assert.equal(actual, expected);
    })

    it('Phone number is 8 characters. Test should return error message "error in phone number"', () => {

        let actual = validatePhoneNumber("aaaaaaaa");
        let expected = "error in phone number";

        assert.equal(actual, expected);
    })

    it('Phone number is string 0123456. Test should return error message "error in phone number"', () => {

        let actual = validatePhoneNumber("0123456");
        let expected = "error in phone number";

        assert.equal(actual, expected);
    })

    it('Phone number is string 012345678. Test should return error message "error in phone number"', () => {

        let actual = validatePhoneNumber("012345678");
        let expected = "error in phone number";

        assert.equal(actual, expected);
    })

    it('Phone number is string 22223333. Test should pass with the message "ok"', () => {

        let actual = validatePhoneNumber("22223333");
        let expected = "ok";

        assert.equal(actual, expected);
    })

})