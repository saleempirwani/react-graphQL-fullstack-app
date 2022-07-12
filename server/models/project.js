const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'] },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Clients' }
})

module.exports = mongoose.model('Projects', schema)