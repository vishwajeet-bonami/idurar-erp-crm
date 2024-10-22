const mongoose = require('mongoose');

const Model = mongoose.model('Vendor');

const update = async (req, res)=>{
    const {id} = req.params;
    const vendor = await Model.findByIdAndUpdate(id, req.body, {new: true});
    res.json({success: true, message: 'Vendor created successfully', vendor: vendor});
}

module.exports = update;