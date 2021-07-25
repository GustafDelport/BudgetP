const mongoose = require('mongoose')

const Data = mongoose.Schema(
    {
        id: { type: String, required: true },
        name: { type: String, required: true },
        cost: { type: Number, required: false },
    }
)

module.exports = mongoose.model('expenses', Data)