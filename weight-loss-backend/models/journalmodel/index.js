const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journalSchema = new Schema ({
    // _id: Number,
    meals: { type: String, required: true},
    totalcalories: { type: Number, required: true},
    dow: { type: String, required: true}
}, {
    timestamps: true,
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;