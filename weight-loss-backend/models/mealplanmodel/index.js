const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mealplanSchema = new Schema ({
    title: {Type: String},
    // image: {Type: Image},
    recipelink: {Type: String},
    date: {type: Date}
}, {
    timestamps: true,
});

const MealPlan = mongoose.model('MealPlan', mealplanSchema);

module.exports = MealPlan;