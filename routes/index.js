const router = require ('express').Router();
const path = require ('path');
const apiRoutes = require ('./apiRoutes');
const journalRoutes = require('./journalRoutes');
const mealplanRoutes = require('./mealplanRoutes');

const url = 'mongodb://localhost:3001/test';

router.use('/api', apiRoutes);
router.use('/journal', journalRoutes);
router.use('/mealplan', mealplanRoutes);

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../weight-loss-app/src/components/RecipeFind/RecipeSearch'));
// });

router.get('/journal', (req, res) => {
    res.sendFile(path.join(__dirname, '../weight-loss-app/public/index.html'))
});
router.get('/mealplan', (req, res) => {
    res.sendFile(path.join(__dirname, '../weight-loss-app/public/index.html'))
});
router.get('/user', (req, res) => {
    res.sendFile(path.join(__dirnam, '../weight-loss-app/public/index.html'))
});

module.exports = router;