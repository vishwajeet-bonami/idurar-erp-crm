const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const methods = createCRUDController('Vendor');

// const create = require('./create');
const Delete = require('./Delete');
const edit = require('./edit');
const getVendor = require('./getVendor');

// methods.create = create;
methods.delete = Delete;
methods.update = edit;
methods.read = getVendor;

module.exports = methods;