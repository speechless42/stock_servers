const StockIdDB = require('../../../models').stockIds;

const Get_Ids_From_DB = async () => {
    let IDs = await StockIdDB.findAll();
    return IDs
}
module.exports = { Get_Ids_From_DB };