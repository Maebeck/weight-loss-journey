const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mealplanSchema = new Schema ({
    title: '',
    // image: '',
    recipelink: '',
}, {
    timestamps: true,
});

const MealPlan = mongoose.model('MealPlan', mealplanSchema);

module.exports = MealPlan;