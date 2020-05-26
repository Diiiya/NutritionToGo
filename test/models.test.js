const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai); //makes 'expect().calledWith' possible
const expect = chai.expect;
const { 
    sequelize,
    dataTypes,
    checkModelName,
    checkUniqueIndex,
    checkPropertyExists
} = require('sequelize-test-helpers');
//import models
const RestaurantModel = require('../db/models/restaurant');
const MenuCategoryModel = require('../db/models/menucategory');
const MenuItemModel = require('../db/models/menuitem');
const ItemIngredientModel = require('../db/models/itemingredient');
const OrderModel = require('../db/models/order');
const OrderItemModel = require('../db/models/orderitem');


describe('Model testing', () =>{
    describe('db/models/restaurant', () => {
        //make a mock model
        const Model = RestaurantModel(sequelize, dataTypes);
        const instance = new Model();
        
        //is named 'Restaurant'
        checkModelName(Model)('Restaurant');
        
        //has properties
        context('properties', () => {
            ;[
                'name', 
                'logoRelativePath', 
                'openAtHour', 
                'closedAtHour', 
                'deliveryPrice', 
                'deliveryLowerBoundary',
                'deliveryUpperBoundary', 
                'deliveryTimeMinutes', 
                'rating', 
                'address', 
                'postalCode', 
                'city'
            ]
            .forEach(checkPropertyExists(instance))
        })
    
        //How do I test more than one association at a time??
        context('associations', () => {
            const Order = 'Some Order model'
            const MenuCategory = 'Some MenuCategory model'

            describe('Order association', () => {
                
                before(() =>{
                    Model.associate({Order})
                })
    
                it('hasMany Order', () => {
                    expect(Model.hasMany).to.have.been.calledWith(Order, {foreignKey: 'restaurantId', onDelete: 'cascade'})
                })
            })

            describe('MenuCategory association', () => {
                
                before(() =>{
                    Model.associate({MenuCategory})
                })
                
                it('hasMany MenuCategory', () => {
                    expect(Model.hasMany).to.have.been.calledWith(MenuCategory, {foreignKey: 'restaurantId', onDelete: 'cascade'})
                })
            })
        })
    })

    describe('db/models/MenuCategory', () => {
        //make a mock model
        const Model = MenuCategoryModel(sequelize, dataTypes);
        const instance = new Model();
        
        //is named 'MenuCategory'
        checkModelName(Model)('MenuCategory');
        
        //has properties
        context('properties', () => {
            ;[
                'categoryName', 
                'restaurantId'
            ]
            .forEach(checkPropertyExists(instance))
        })
    
        context('associations', () => {
            const Restaurant = 'Some Restaurant model';
            const MenuItem = 'Some MenuItem model';
            
            describe('Restaurant association', () => {

                before(() =>{
                    Model.associate({Restaurant})
                })

                it('belongsTo Restaurant', () => {
                    expect(Model.belongsTo).to.have.been.calledWith(Restaurant, {foreignKey: 'restaurantId'})
                })
            })
            
            describe('MenuItem association', () => {

                before(() =>{
                    Model.associate({MenuItem})
                })
                
                it('hasMany MenuItem', () => {
                    expect(Model.hasMany).to.have.been.calledWith(MenuItem, {foreignKey: 'categoryId', onDelete: 'cascade'})
                })
            })
        })
    })

    describe('db/models/MenuItem', () => {
        //make a mock model
        const Model = MenuItemModel(sequelize, dataTypes);
        const instance = new Model();
        
        //is named 'MenuItem'
        checkModelName(Model)('MenuItem');
        
        //has properties
        context('properties', () => {
            ;[
                'itemName', 
                'price', 
                'categoryId'
            ]
            .forEach(checkPropertyExists(instance))
        })
    
        context('associations', () => {
            const MenuCategory = 'Some Category model'
            const ItemIngredient = 'Some ItemIngredient model'
            
            describe('MenuCategory association', () => {

                before(() =>{
                    Model.associate({MenuCategory})
                })

                it('belongsTo MenuCategory', () => {
                    expect(Model.belongsTo).to.have.been.calledWith(MenuCategory, {foreignKey: 'categoryId'})
                })
            })
            
            describe('ItemIngredient association', () => {

                before(() =>{
                    Model.associate({ItemIngredient})
                })

                it('belongsToMany ItemIngredient', () => {
                    expect(Model.belongsToMany).to.have.been.calledWith(ItemIngredient, {
                        as: 'ingredient',
                        foreignKey: 'MenuItemsid',
                        through: 'ItemsIngredients'    
                      })
                })
            })
        })
    })

    describe('db/models/ItemIngredient', () => {
        //make a mock model
        const Model = ItemIngredientModel(sequelize, dataTypes);
        const instance = new Model();
        
        //is named 'ItemIngredient'
        checkModelName(Model)('ItemIngredient');
        
        //has properties
        context('properties', () => {
            ;[
                'ingredientName'
            ]
            .forEach(checkPropertyExists(instance))
        })
    
        context('associations', () => {
            const MenuItem = 'Some MenuItem model'
            
            describe('MenuItem association', () => {

                before(() =>{
                    Model.associate({MenuItem})
                })

                it('belongsToMany MenuItem', () => {
                    expect(Model.belongsToMany).to.have.been.calledWith(MenuItem, {
                        as: 'item',
                        foreignKey: 'ItemsIngredientsid',
                        through: 'ItemsIngredients'    
                      })
                })
            })
        })
    })

    describe('db/models/Order', () => {
        //make a mock model
        const Model = OrderModel(sequelize, dataTypes);
        const instance = new Model();
        
        //is named 'Order'
        checkModelName(Model)('Order');
        
        //has properties
        context('properties', () => {
            ;[
                'cusFirstName', 
                'cusSurname',
                'address',
                'postalCode',
                'city',
                'phoneNumber',
                'delivery',
                'totalPrice', 
                'restaurantId'
            ]
            .forEach(checkPropertyExists(instance))
        })
    
        context('associations', () => {
            const Restaurant = 'Some Restaurant model';
            const OrderItem = 'Some OrderItem model';
            
            describe('Restaurant association', () => {

                before(() =>{
                    Model.associate({Restaurant})
                })

                it('belongsTo Restaurant', () => {
                    expect(Model.belongsTo).to.have.been.calledWith(Restaurant, {foreignKey: 'restaurantId'})
                })
            })

            describe('OrderItem association', () => {

                before(() =>{
                    Model.associate({OrderItem})
                })
                
                it('hasMany OrderItem', () => {
                    expect(Model.hasMany).to.have.been.calledWith(OrderItem, {foreignKey: 'orderId', onDelete: 'cascade'})
                })
            })
        })
    })

    describe('db/models/OrderItem', () => {
        //make a mock model
        const Model = OrderItemModel(sequelize, dataTypes);
        const instance = new Model();
        
        //is named 'OrderItem'
        checkModelName(Model)('OrderItem');
        
        //has properties
        context('properties', () => {
            ;[
                'itemName', 
                'quantity', 
                'price',
                'orderId'
            ]
            .forEach(checkPropertyExists(instance))
        })
    
        context('associations', () => {
            const Order = 'Some Order model'
            
            describe('Order association', () => {

                before(() =>{
                    Model.associate({Order})
                })
    
                it('belongsTo Order', () => {
                    expect(Model.belongsTo).to.have.been.calledWith(Order, {foreignKey: 'orderId'})
                })
            })
        })
    })
})