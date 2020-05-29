const restaurantUtil = require('../../client/src/utils/restaurantUtil');
const calculatePrice = restaurantUtil.calculatePrice;

const assert = require('chai').assert;

describe('calculatePrice() tests', function() {

    context('Restaurant details: lower boundary 100, delivery 20, upper boundary 250', () => {

        let totalPrice;
        let delivery;
        const lowerBoundary = 100;
        const upperBoundary = 250;
        const deliveryPrice = 20;

        it('Pick up, products = 60 DKK, should not affect price', () => {

            totalPrice = 60;
            delivery = false;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 60; 

            assert.equal(actual, expected);
        })

        it('Pick up, products = 100 DKK, should not affect price', () => {
            
            totalPrice = 100;
            delivery = false;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 100; 

            assert.equal(actual, expected);

        })

        it('Pick up, products = 150 DKK, should not affect price', () => {
            
            totalPrice = 150;
            delivery = false;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 150; 

            assert.equal(actual, expected);
        })

        it('Delivery, products = 60 DKK, should add 40 DKK and 20 DKK (delivery fee). Should return 120 DKK total', () => {
            
            totalPrice = 60;
            delivery = true;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 120; 

            assert.equal(actual, expected);
        })

        it('Delivery, products = 100 DKK, should not add extra amount, only 20 DKK (delivery fee). Should return 120 DKK total', () => {
            
            totalPrice = 100;
            delivery = true;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 120; 

            assert.equal(actual, expected);
        })

        it('Delivery, products = 150 DKK, should not add extra amount, only 20 DKK (delivery fee). Should return 170 DKK total', () => {
            
            totalPrice = 150;
            delivery = true;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 170; 

            assert.equal(actual, expected);
        })

        it('Delivery, products = 250 DKK, should not affect price', () => {
            
            totalPrice = 250;
            delivery = true;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 250; 

            assert.equal(actual, expected);
        })

        it('Delivery, products = 300 DKK, should not affect price', () => {
            
            totalPrice = 300;
            delivery = true;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 300; 

            assert.equal(actual, expected);
        })
    })

    context('Restaurant details: lower boundary 100, delivery 20, upper boundary null', function() {

        let totalPrice;
        let delivery;
        const lowerBoundary = 100;
        const upperBoundary = null;
        const deliveryPrice = 20;

        it('Delivery, products = 60, should add 40 DKK and no delivery fee. Should return 100 DKK total', () => {
            
            totalPrice = 60;
            delivery = true;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 100; 

            assert.equal(actual, expected);
        })

        it('Delivery products = 100, should not add extra amount and no delivery fee. Should return 100 DKK total', () => {
            
            totalPrice = 100;
            delivery = true;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 100; 

            assert.equal(actual, expected);
        })

        it('Delivery products = 150, should not add extra amount and no delivery fee. Should return 150 DKK total', () => {
            
            totalPrice = 150;
            delivery = true;

            let actual = calculatePrice(totalPrice, delivery, lowerBoundary, upperBoundary, deliveryPrice);
            let expected = 150; 

            assert.equal(actual, expected);
        })
    })
})