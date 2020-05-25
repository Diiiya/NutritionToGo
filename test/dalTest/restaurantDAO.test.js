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

after( async function() {
    this.timeout(15000);
    await cleanDB();
})

describe('RestaurantDAO', async () => {

    const restaurant = new Restaurant();
    const restaurants = await restaurant.getAll();

    it('getAll() has length of 3', async () => {
        //console.log(restaurants)
        assert.lengthOf(restaurants, 3, 'has lenght of 3');
    })
})