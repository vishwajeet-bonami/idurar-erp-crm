const mongoose = require('mongoose');

const Model = mongoose.model('Vendor');

const Delete = async (req, res) =>{
    await Model.findByIdAndDelete(req.params.id);
    res.status(204).json({success: true, message: 'Vendor deleted successfully'});
}

module.exports = Delete;