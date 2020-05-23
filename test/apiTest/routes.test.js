const assert = require('chai').assert;

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