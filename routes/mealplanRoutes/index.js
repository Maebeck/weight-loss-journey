const router = require('express').Router();
let MealPlan = require('../../models/mealplanmodel');

router.route('/').get((req, res) => {
    MealPlan.find().then(mealplan => res.json(mealplan))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    // const image = req.body.image;
    const recipelink = req.body.recipelink;

const newMealPlan = new MealPlan({
    title,
    recipelink
});

newMealPlan.save()
.then(() => res.json('Meal Plan entry added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    MealPlan.findById(req.params.id).then(mealplan => res.json(mealplan))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;