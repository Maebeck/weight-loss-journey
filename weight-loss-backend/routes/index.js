const router = require ('express').Router();
const path = require ('path');
const apiRoutes = require ('./apiRoutes');
const journalRoutes = require('./journalRoutes');
const mongo = require('mongodb');
const mealplanRoutes = require('./mealplanRoutes');

const url = 'mongodb://localhost:3001/test';

router.use('/api', apiRoutes);
router.use('/journal', journalRoutes);
router.use('/mealplan', mealplanRoutes);

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../weight-loss-app/src/components/RecipeFind/RecipeSearch'));
// });

router.get('/journal', (req, res) => {
    res.sendFile(path.join(__dirname, '../../weight-loss-app/src/pages/JournalPage.js'))
});
router.get('/mealplan', (req, res) => {
    res.sendFile(path.join(__dirname, '../../weight-loss-app/src/pages/MealPlan.js'))
});
router.get('/user', (req, res) => {
    res.sendFile(path.join(__dirnam, '../../weight-loss-app/src/pages/UserPage.js'))
});

module.exports = router;