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

const Restaurant = require('../../dal/restaurantDAO');
const helpers = require('../helpers');

const cleanDB = helpers.cleanDB;
const seedDB = helpers.seedDB; 

before( async function() {
    this.timeout(15000);
    await cleanDB();
    await seedDB().catch( error => {done(error) });
})

/*
after( async function() { //uncomment this if you need a clean database after the tests, e.g. no test data within DB
    this.timeout(15000);
    await cleanDB();
})
*/

describe('RestaurantDAO', async function() {
    //this.timeout(5000); //if test fails, try uncomment this

    const restaurant = new Restaurant();
    const restaurants = await restaurant.getAll();

    it('getAll() has length of 3', async () => {
        //console.log(restaurants) //for debugging. If array of restaurants is not showing in console, then something is terribly wrong
        assert.lengthOf(restaurants, 3, 'has lenght of 3');
    })
})