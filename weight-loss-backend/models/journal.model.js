const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journalSchema = new Schema ({
    meal: { type: String, required: true},
    calories: { type: Number, required: true},
    // date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;