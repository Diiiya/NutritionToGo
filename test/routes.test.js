//Test data import
const testData = require('./testData');

const app = require('../server');
const chai = require('chai');
const sinon = require('sinon');
const Restaurant = require('../dal/restaurantDAO');
const request = require('supertest');
const expect = chai.expect;

/**
 * Making stubs for each test to avoid connecting to db to get data, thereby the tests can run faster. 
 * Also making sure the stubs get called, therfore the real method in the real application will also get called on.
 * The corresponding real db method is tested in restaurantDAO.test.js.
 */

describe('indexRouter tests', function () {
    context('Route GET \'/api/restaurants\'', function () {
        //Data for stub to return
        const fakeData = testData.testRestaurants;

        it('index middleware function respond 200, json, and calls getAll from DAO', async function () {
            //Stub
            const restaurant = Restaurant;
            const stub = sinon
                .stub(restaurant, 'getAll')
                .resolves(fakeData);

            await request(app).get('/api/restaurants')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(fakeData);
            
            //Test fails if stub is not called
            expect(stub.called).to.be.true;
            
            //Restore behavior of method. Else it would disturb other tests in other testfiles.
            stub.restore();
        })
    })

    context('Route GET \'api/restaurant/:id\'', async function () {
        //Data for stub to return
        const fakeData = testData.testSingleRestaurant;

        it('getById middleware function respond 200, json, and calls getById from DAO', async function () {
            //Stub
            const restaurant = Restaurant;
            const stub = sinon
                .stub(restaurant, 'getById')
                .resolves(fakeData);

            await request(app).get('/api/restaurants/2')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(fakeData);

            //Test fails if stub is not called
            expect(stub.called).to.be.true;

            //Restore behavior of method. Else it would disturb other tests in other testfiles.
            stub.restore();
        })
    })

    context('Route GET \'api/restaurants/:id/order/:id2\'', () => {

        //Data for stub to return
        const fakeData = testData.testOrder;

        it('getOrderById middleware function respond 200, json, and calls getOrderById from DAO', async function () {
            //Stub
            const restaurant = Restaurant;
            const stub = sinon
                .stub(restaurant, 'getOrderById')
                .resolves(fakeData);

            await request(app).get('/api/restaurants/2/order/1')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(fakeData);

            //Test fails if stub is not called
            expect(stub.called).to.be.true;

            //Restore behavior of method. Else it would disturb other tests in other testfiles.
            stub.restore();
        })
    })

    context('Route POST \'api/restaurants/:id/order\'', () => {

        //Data for stub to return
        const fakeData = testData.testOrder;

        it('createOrder middleware function respond 201, json, and calls addOrder from DAO', async function () {
            //Stub
            const restaurant = Restaurant;
            const stub = sinon
                .stub(restaurant, 'addOrder')
                .resolves(fakeData);

            await request(app).post('/api/restaurants/3/order')
                .expect(201)
                .expect('Content-Type', /json/)
                .expect(fakeData);

            //Test fails if stub is not called
            expect(stub.called).to.be.true;

            //Restore behavior of method. Else it would disturb other tests in other testfiles. 
            stub.restore();
        })
    })
})