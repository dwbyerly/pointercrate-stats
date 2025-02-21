// mongoose model for player

const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    scores: [{
        date: {
            type: Date,
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    }]
});

module.exports = mongoose.model('Player', playerSchema) || mongoose.models.Player;