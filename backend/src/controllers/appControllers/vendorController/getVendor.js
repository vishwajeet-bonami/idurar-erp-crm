const mongoose = require('mongoose');
const Model = mongoose.model('Vendor');

const getVendor = async (req,res)=>{
    const {id} = req.params;
    const vendor = await Model.findById(id);
    res.json({success: true, vendor: vendor});
}

module.exports = getVendor;