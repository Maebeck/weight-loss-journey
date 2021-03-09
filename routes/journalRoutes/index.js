const router = require('express').Router();
let Journal = require('../../models/journalmodel');

router.route('/').get((req, res) => {
    Journal.find().then(journal=> res.json(journal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const meals =req.body.meals;
    const calories = req.body.calories;
    const totalcalories = req.body.totalcalories;
    const date = req.body.date;


const newJournal = new Journal({
    meals,
    calories,
    totalcalories,
    date
});

newJournal.save()
.then(() => res.json('Journal entry added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Journal.findById(req.params.date).then(journal => res.json(journal)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Journal.findByIdandUpdate(req.params.date).then(journal => {
        journal.meals = req.body.meals;
        journal.calories= req.body.calories;
        journal.save().then(() => res.json('Journal updated!')).catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;