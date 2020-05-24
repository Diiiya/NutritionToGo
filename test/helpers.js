/**Helpers is there to avoid duplicate code and to ensure that our
 * test files are as clean as possible; only contains tests, not e.g.
 * preparings or settings 
 */

 const models = require('../db/models');
 const RestaurantModel = models.Restaurant;
 const MenuCategoryModel = models.MenuCategory;
 const MenuItemModel = models.MenuItem;
 const ItemIngredientModel = models.ItemIngredient;
 const testData = require('./testData').testData;

/**Method cleanDB() will call db.model.truncate({cascade: true}).
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
*/
exports.cleanDB = async (db) => {
    await db.ItemIngredient.truncate({cascade: true}) //n:m relation has default onDelete: cascade, but cascade must be defined when using truncate() to avoid "depenent on"-errors
    await db.MenuItem.truncate({cascade: true}) //possibly redundant
    await db.MenuCategory.truncate({cascade: true}) //1:m relation with MenuItem, therefore every MenuItem will be deleted
    await db.OrderItem.truncate({cascade: true}) //possibly redundant
    await db.Order.truncate({cascade: true}) //1:m relation with OrderItem, therefore every OrderItem will be deleted
    await db.Restaurant.truncate({cascade: true}) //1:m relation with MenuCategory and Order
}

/**Method seedDB will fill db with data on our tables that users can
 * only read from: Restaurant, MenuCategory, MenuItem, ItemIngredient
 */

exports.seedDB = async () => {
    await RestaurantModel.bulkCreate(testData.restaurants);
    await MenuCategoryModel.bulkCreate(testData.menuCategories);
    await MenuItemModel.bulkCreate(testData.menuItems);
    await ItemIngredientModel.bulkCreate(testData.itemIngredients);

    MenuItemModel.findAll()
    .then( item => {
        ItemIngredientModel.findAll()
        .then( ingredient => {
            item[0].setIngredients([ingredient[0], ingredient[1]]);
            item[1].setIngredients([ingredient[2], ingredient[3]])
            item[2].setIngredients([ingredient[4], ingredient[5]])
            item[3].setIngredients([ingredient[6], ingredient[7]])
            item[4].setIngredients([ingredient[8], ingredient[9]])
            item[5].setIngredients([ingredient[10], ingredient[11]])
            item[6].setIngredients([ingredient[12], ingredient[13]])
            item[7].setIngredients([ingredient[14], ingredient[15]])
            item[9].setIngredients([ingredient[16], ingredient[17], ingredient[18], ingredient[19]])
        })
        .catch(err => {
            console.log(err)
        })
    })
}