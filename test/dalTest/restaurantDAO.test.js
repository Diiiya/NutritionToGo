var assert = require('chai').assert;

describe('Restaurant data access object', function() {
    describe('insertOne()', function() {
        it('insert a restaurant and return id', function() {
            let restaurantObj = {
                name: 'Macro',
                logoRelativePath: '/rLogo/macro',
                openAtHour: 1200,
                closedAtHour: 2100,
                deliveryPrice: 20.00,
                deliveryMinimumOrderAmount: 100,
                deliveryTimeMinutes: 45,
                rating: 4.8,
                address: 'Jernbanegade 1',
                postalCode: 4700,
                city: 'Næstved'
            }

        })
    })
})