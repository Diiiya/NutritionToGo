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

const Restaurant = require('../dal/restaurantDAO');
const helpers = require('./helpers');

const cleanDB = helpers.cleanDB;
const seedDB = helpers.seedDB;

before(async function () {
    this.timeout(15000);
    await cleanDB();
    await seedDB().catch(error => { throw error });

})

/*
after( async function() { //uncomment this if you need a clean database after the tests, e.g. no test data within DB
    this.timeout(15000);
    await cleanDB();
})
*/

describe('RestaurantDAO', async function () {
    //this.timeout(5000); //if test fails, try uncomment this

    const restaurant = new Restaurant();

    xcontext('getAll() tests', function () {
        const restaurants = restaurant.getAll();

        it('getAll(): has length of 3', async () => {
            //console.log(restaurants) //for debugging. If array of restaurants is not showing in console, then something is terribly wrong
            assert.lengthOf(restaurants, 3, 'has lenght of 3');
        })

        it('getAll(): restaurant at index 0 is named "Macro"', () => {

            let actual = restaurants[0].name;
            let expected = 'Macro';

            assert.equal(actual, expected);
        })
    })

    context('addOrder() tests', function () {
        it('addOrder(): created order has cusFirstName \'Boaty\'', async function () {

            var orderExample =

            {
                cusFirstName: 'Boaty',
                cusSurname: 'McBoatface',
                address: 'Some Street 123',
                postalCode: 6500,
                city: 'Tortuga',
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
            console.log(createdOrder);
            let actual = 'Boaty';
            let expected = createdOrder.cusFirstName;

            assert.equal(actual, expected);
        })
    })

})