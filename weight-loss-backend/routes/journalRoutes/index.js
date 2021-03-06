const router = require('express').Router();
let Journal = require('../../models/journalmodel');

router.route('/').get((req, res) => {
    Journal.find().then(journal=> res.json(journal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const meals =req.body.meals;
    const totalcalories = req.body.totalcalories;
    const dow = req.body.dow;


const newJournal = new Journal({
    meals,
    totalcalories,
    dow,
});

newJournal.save()
.then(() => res.json('Journal entry added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Journal.findById(req.params.id).then(journal => res.json(journal)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Journal.findById(req.params.id).then(journal => {
        journal.meals = req.body.meals;
        journal.totalcalories= req.body.totalalories;
        journal.dow =req.body.dow;

        journal.save().then(() => res.json('Journal updated!')).catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;