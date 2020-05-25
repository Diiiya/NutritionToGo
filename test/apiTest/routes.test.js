//const app = require('../../server');
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
//chai.use(chaiHttp); 

//Declare and initalize variable containing our test server. Default behavior: closes server after every request. keepOpen() ensures the server to keep listening until it is manually closed.
//var requester = chai.request(app).keepOpen();


xdescribe('Route GET \'/\'', () => {
    var actual = 1+2;
    var expected = 3;
    
    it('list of restaurants', () => {
        assert.equal(actual, expected);
    })
    
})

xdescribe('Route GET \'/:id\'', () => {
    var actual = 1+2;
    var expected = 3;
    
    it('A restaurant an its menu', () => {
        assert.equal(actual, expected);
    })
    
})

xdescribe('Route POST \'/:id/order\'', () => {
    var actual = 1+2;
    var expected = 3;
    
    it('User sends his/her information', () => {
        assert.equal(actual, expected);
    })
    
})