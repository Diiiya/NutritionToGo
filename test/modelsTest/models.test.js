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
const RestaurantModel = require('../../db/models/restaurant');
const MenuCategoryModel = require('../../db/models/menucategory');
const MenuItemModel = require('../../db/models/menuitem');
const ItemIngredientModel = require('../../db/models/itemingredient');
const OrderModel = require('../../db/models/order');
const OrderItemModel = require('../../db/models/orderitem');


describe('Model testing', () =>{
    describe('db/models/restaurant', () => {
        //make a mock model
        const Model = RestaurantModel(sequelize, dataTypes);
        const instance = new Model();
        
        //is named 'Restaurant'
        checkModelName(Model)('Restaurant');
        
        //has properties
        context('properties', () => {
            ;['name', 'deliveryMinimumOrderAmount', 'city'].forEach(
                checkPropertyExists(instance)
            )
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
            ;['categoryName', 'restaurantId'].forEach(
                checkPropertyExists(instance)
            )
        })
    
        context('associations', () => {
            const Restaurant = 'Some Restaurant model'
    
            before(() =>{
                Model.associate({Restaurant})
            })
            it('defined a belongsTo association with Restaurant', () => {
                expect(Model.belongsTo).to.have.been.calledWith(Restaurant, {foreignKey: 'restaurantId'})
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
            ;['itemName', 'price', 'categoryId'].forEach(
                checkPropertyExists(instance)
            )
        })
    
        context('associations', () => {
            const MenuCategory = 'Some Category model'
    
            before(() =>{
                Model.associate({MenuCategory})
            })
            it('defined a belongsTo association with Category', () => {
                expect(Model.belongsTo).to.have.been.calledWith(MenuCategory, {foreignKey: 'categoryId'})
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
            ;['ingredientName'].forEach(
                checkPropertyExists(instance)
            )
        })
    
        context('associations', () => {
            const MenuItem = 'Some MenuItem model'
    
            before(() =>{
                Model.associate({MenuItem})
            })
            it('defined a belongsToMany association with MenuItem', () => {
                expect(Model.belongsToMany).to.have.been.calledWith(MenuItem, {
                    as: 'item',
                    foreignKey: 'ItemsIngredientsid',
                    through: 'ItemsIngredients'    
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
            ;['cusFirstName', 'city', 'restaurantId'].forEach(
                checkPropertyExists(instance)
            )
        })
    
        context('associations', () => {
            const Restaurant = 'Some Restaurant model'
    
            before(() =>{
                Model.associate({Restaurant})
            })
            it('defined a belongsTo association with Restaurant', () => {
                expect(Model.belongsTo).to.have.been.calledWith(Restaurant, {foreignKey: 'restaurantId'})
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
            ;['itemName', 'quantity', 'orderId'].forEach(
                checkPropertyExists(instance)
            )
        })
    
        context('associations', () => {
            const Order = 'Some Order model'
    
            before(() =>{
                Model.associate({Order})
            })
            it('defined a belongsTo association with Order', () => {
                expect(Model.belongsTo).to.have.been.calledWith(Order, {foreignKey: 'orderId'})
            })
        })
    })
})