/**
 * Test file of dal/restaurantDAO.js
 * 
 * If running these tests locally, a bad internet connection may cause the tests to fail.
 * If it happens, debug with 'this.timeout(int miliseconds)' where it fits. 
 * Remember: 'this' can only be used in declared functions function(){}, not arrow-functions () => {}
 */

const chai = require('chai');
const assert = chai.assert;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const restaurant = require('../../dal/restaurantDAO');
const helpers = require('./helpers');

const cleanDB = helpers.cleanDB;
const seedDB = helpers.seedDB;

before(async function () {
    this.timeout(15000);
    await cleanDB();
    await seedDB().catch(error => { throw error });

})

describe('restaurantDAO tests', function () {
    //this.timeout(5000); //if test fails, try uncomment this
    context('getAll() tests', function () {
    
        it('getAll(): has length of 3', async () => {

            const restaurants = await restaurant.getAll();
            
            assert.lengthOf(restaurants, 3, 'has lenght of 3');
        })

        it('getAll(): restaurant at index 0 is named "Macro"', async () => {

            const restaurants = await restaurant.getAll();

            let actual = restaurants[0].name;
            let expected = 'Macro';

            assert.equal(actual, expected);
        })
    })

    context('getById() tests', async function() {
    
        it('getById: id = 1 name is "Macro"', async () => {

            const singleRestaurant = await restaurant.getById(1);

            let actual = singleRestaurant.name;
            let expected = 'Macro'
        })

        it('getById: id = 2 name is "Dhaba"', async () => {

            const singleRestaurant = await restaurant.getById(2);

            let actual = singleRestaurant.name;
            let expected = 'Dhaba'
        })

        it('getById: id = 3 name is "Café Elysia"', async () => {

            const singleRestaurant = await restaurant.getById(3);

            let actual = singleRestaurant.name;
            let expected = 'Café Elysia'
        })
    })

    context('addOrder() tests', function () {
        it('addOrder(): created order has cusFirstName \'Michael\'', async function () {

            var orderExample =

            {
                cusFirstName: 'Michael',
                cusSurname: 'Scott',
                address: 'Some Street 123',
                postalCode: 6500,
                city: 'Paper City',
                phoneNumber: 98765432,
                delivery: 0,
                totalPrice: 210.00,
                orderItems: [
                    {
                        itemName: 'Eatable item 1',
                        quantity: 2,
                        price: 20.00
                    },
                    {
                        itemName: 'Expensive eatable item 2',
                        quantity: 1,
                        price: 170.00
                    }
                ]
            }

            let createdOrder = await restaurant.addOrder(orderExample, 1)
            .then( )
            //console.log(createdOrder);
            let actual = 'Michael';
            let expected = createdOrder.cusFirstName;

            assert.equal(actual, expected);
        })
    })

    context('getOrderById() tests', function() {
        
        it('getOrderById(): cusSurname should equal "Scott"', async () => {
            
            const singleOrder = await restaurant.getOrderById(1, 1);

            let actual = singleOrder.cusSurname;
            let expected = 'Scott'

            assert.equal(actual, expected);
        })
    })

})