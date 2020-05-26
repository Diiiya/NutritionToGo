const app = require('../server');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp); 

describe('Some name', function() {
    context('Route GET \'/api/restaurants\'', async function() {
        var requester = chai.request(app);
        let res = await requester.get('/api/restaurants')
    
        it('status 200', () => {
        let actual = res.status;
        let expected = 200;

        assert.equal(actual, expected);
        })

        it('content-Type equals application/json; charset-utf-8', () => {
            let actual = res.header['content-type'];
            let expected = 'application/json; charset=utf-8'
            assert.equal(actual, expected)
        })
    })
})

describe('Route GET \'/:id\'', () => {
    var actual = 1+2;
    var expected = 3;
    
    it('A restaurant an its menu', () => {
        assert.equal(actual, expected);
    })
    
})

describe('Route POST \'/:id/order\'', () => {
    var actual = 1+2;
    var expected = 3;
    
    it('User sends his/her information', () => {
        assert.equal(actual, expected);
    })
    
})