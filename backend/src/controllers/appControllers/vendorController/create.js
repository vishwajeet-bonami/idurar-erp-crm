const mongoose = require('mongoose');
const Model = mongoose.model('Vendor');

const create = async (req,res)=>{
    const Vendor = req.body;
    await Model.create(Vendor);
    res.status(201).json({success: true, message: 'Vendor created successfully'});
}

module.exports = create;

