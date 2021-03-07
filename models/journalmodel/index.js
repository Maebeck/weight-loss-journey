const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema ({
    // _id: Number,
    UserID: email,
    meals: [],
    calories: [],
    totalCal: {type: Number},
    date: {}
}, {
    timestamps: true,
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;