const router = require('express').Router();
const journalRoutes = require('./journalRoutes');
const mealplanRoutes = require('./mealplanRoutes');
const path = require('path');


// // const url = 'mongodb://localhost:3001/test';


router.use('/api/journal', journalRoutes);
router.use('/api/MealPlan', mealplanRoutes);


// // router.get('/journal', (req, res) => {
// //     res.sendFile(path.join(__dirname, '../weight-loss-app/public/index.html'))
// // });
// // router.get('/mealplan', (req, res) => {
// //     res.sendFile(path.join(__dirname, '../weight-loss-app/public/index.html'))
// // });
// // router.get('/user', (req, res) => {
// //     res.sendFile(path.join(__dirnam, '../weight-loss-app/public/index.html'))
// // });
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../weight-loss-app/build/index.html"));
  });
module.exports = router;