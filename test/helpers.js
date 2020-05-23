/**Helpers is there to avoid duplicate code and to ensure that our
 * test files are as clean as possible; only contains tests, not e.g.
 * preparings or settings 
 */

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
