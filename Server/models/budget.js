const mongoose = require('mongoose')

const Budget = new mongoose.Schema(
    {
        budget: { type: Number } 
    }
)

module.exports = mongoose.model('budgets', Budget)