const app = require('../server');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp); 

//Declare and initalize variable containing our test server. Default behavior: closes server after every request. keepOpen() ensures the server to keep listening until it is manually closed.
var requester = chai.request(app).keepOpen();

describe('LALALA', function() {
    context('Route GET \'/api/restaurants\'', async function() {
        let res = await requester.get('/api/restaurants')
    
        it('status 200', () => {

        let actual = res.status;
        let expected = 200;

        assert.equal(actual, expected);

        
        })
        await requester.close();
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