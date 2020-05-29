const app = require('../server');
const chai = require('chai');
const sinon = require('sinon');
const Restaurant = require('../dal/restaurantDAO');
const request = require('supertest');
const expect = chai.expect;
const assert = chai.assert;
//const chaiHttp = require('chai-http');
//chai.use(chaiHttp);

//var requester = chai.request(app);

describe('Some name', function () {
    context('Route GET \'/api/restaurants\'', function () {

        it('indexController index()', async function () {
            const fakeData = [
                {
                  id: 1,
                  name: 'Test1',
                  logoRelativePath: '/restaurantLogos/macro',
                  openAtHour: 1200,
                  closedAtHour: 2000,
                  deliveryPrice: 20,
                  deliveryLowerBoundary: 100,
                  deliveryUpperBoundary: 250,
                  deliveryTimeMinutes: 30,
                  rating: 4.9,
                  address: 'Jernbanegade 16',
                  postalCode: 4700,
                  city: 'Næstved'
                },
                {
                  id: 2,
                  name: 'Test2',
                  logoRelativePath: '/restaurantLogos/dhaba',
                  openAtHour: 1200,
                  closedAtHour: 2200,
                  deliveryPrice: 10,
                  deliveryLowerBoundary: 0,
                  deliveryUpperBoundary: null,
                  deliveryTimeMinutes: 30,
                  rating: 4.2,
                  address: 'Sct. Peders Kirkeplads 1',
                  postalCode: 4700,
                  city: 'Næstved'
                },
                {
                  id: 3,
                  name: 'Test3',
                  logoRelativePath: '/restaurantLogos/cafeelysia',
                  openAtHour: 1600,
                  closedAtHour: 2200,
                  deliveryPrice: 0,
                  deliveryLowerBoundary: 50,
                  deliveryUpperBoundary: 150,
                  deliveryTimeMinutes: 45,
                  rating: 4.6,
                  address: 'Jernbanegade 15',
                  postalCode: 4700,
                  city: 'Næstved'
                }
            ];
            const restaurant = Restaurant;
            const stub = sinon
                .stub(restaurant, 'getAll')
                .resolves(fakeData);

            await request(app).get('/api/restaurants')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(fakeData);

            
            //expect(stub.getCall(0).args[0]).to.equal('Test1');

            stub.restore();
        })
    })

    xcontext('Route GET \'api/restaurant/:id\'', async function () {

        //let res = await requester.get('/api/restaurants/3')

        it('status 200', () => {
            let actual = res.status
            let expected = 200;

            assert.equal(actual, expected);
        })

        it('content-Type equals application/json; charset-utf-8', () => {
            let actual = res.header['content-type'];
            let expected = 'application/json; charset=utf-8'
        })
    })

    xcontext('Route POST \'/:id/order\'', () => {

        it('User sends his/her information', () => {
            let actual = 1 + 2;
            let expected = 3;

            assert.equal(actual, expected);
        })

    })
})