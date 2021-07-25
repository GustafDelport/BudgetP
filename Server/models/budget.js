const mongoose = require('mongoose')

const Budget = new mongoose.Schema(
    {
        id: {type:String},
        budget: { type: Number } 
    }
)

module.exports = mongoose.model('budgets', Budget)