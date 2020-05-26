/**
 * Helpers is there to avoid duplicate code and to ensure that our
 * test files are as clean as possible; only contains tests, not e.g.
 * preparings or settings 
 */

 const models = require('../db/models');
 const RestaurantModel = models.Restaurant;
 const MenuCategoryModel = models.MenuCategory;
 const MenuItemModel = models.MenuItem;
 const ItemIngredientModel = models.ItemIngredient;
 const testData = require('./testData').testData;

exports.cleanDB = async () => {

    const t = await models.sequelize.transaction();

    try{
        await RestaurantModel.destroy( { where: {}, cascade: true, transaction: t } );
        await MenuCategoryModel.destroy( { where: {}, cascade: true, transaction: t } );
        await MenuItemModel.destroy( { where: {}, cascade: true, transaction: t } );
        await ItemIngredientModel.destroy( { where: {}, cascade: true, transaction: t } );
        await models.sequelize.query('DBCC CHECKIDENT ("dbo.Restaurants", RESEED, 0)', { raw: true, transaction: t } );
        await models.sequelize.query('DBCC CHECKIDENT ("dbo.MenuCategories", RESEED, 0)', { raw: true, transaction: t } );
        await models.sequelize.query('DBCC CHECKIDENT ("dbo.MenuItems", RESEED, 0)', { raw: true, transaction: t } );
        await models.sequelize.query('DBCC CHECKIDENT ("dbo.ItemIngredients", RESEED, 0)', { raw: true, transaction: t } );
        await t.commit();
    } catch (error) {
        await t.rollback();
    }
}

/**Method seedDB will fill db with data on our tables that users can
 * only read from: Restaurant, MenuCategory, MenuItem, ItemIngredient
 */

exports.seedDB = async () => {
    await RestaurantModel.bulkCreate(testData.restaurants);
    await MenuCategoryModel.bulkCreate(testData.menuCategories);
    await ItemIngredientModel.bulkCreate(testData.itemIngredients);
    var itemArray = await MenuItemModel.bulkCreate(testData.menuItems);

    await itemArray[0].setItemIngredients([1, 2]);
    await itemArray[1].setItemIngredients([3, 4]);
    await itemArray[2].setItemIngredients([5 ,6]);
    await itemArray[3].setItemIngredients([7, 8]);
    await itemArray[4].setItemIngredients([9, 10]);
    await itemArray[5].setItemIngredients([11, 12]);
    await itemArray[6].setItemIngredients([13, 14]);
    await itemArray[7].setItemIngredients([15, 16]);
    await itemArray[9].setItemIngredients([17, 18, 19, 20]);
}

/**
 * 22-05-2020:
 * Method cleanDB() will call db.model.truncate({cascade: true}).
 * 
 * TRUNCATE deletes all rows in a table without the table itself and 
 * without the 'where'-clause as in DELETE. 
 * 
 * When TRUNCATE is called in MSSQL it will also reset identity column
 * to defined seed or default: 1, which will ensure that where our tests
 * includes identity columns they will always pass.
 *  
 * 'cascade' option ensures all rows belonging to the particular row 
 * will be deleted along with it 
 * 
 * To be on the safe side, we clean a table one by one. If all of our
 * tables in DB has setting CASCADE on deletion, it would be possible
 * to only truncate the restaurant table since all other tables depends
 * on this one, parent of all parents.
 * We also truncates tables one by one to ensure all identity columns
 * in every table resets to defined seed or defeault: 1
 * 
 * 25-05-2020
 * UPDATE: 
 * trucate() does not yet work with if foreign key constraints
 * are used with a sequelize/mssql mix. Workaround is using destroy(),
 * then making raw sql queries to reset autoincrement in identity 
 * columns. 
 * In our case, we also used an 'unmanaged' transaction (manually commit
 * and manually rollback) 
 * 
 * 26-05-2020
 * Don't ever mix Promises with async/await
*/
