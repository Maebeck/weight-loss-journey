const router = require('express').Router();
let Journal = require('../models/journal.model');

router.route('/journaldata').get((req, res) => {
    Journal.find().then(journal=> res.json(journal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const meal = req.body.meal;
    const calories = Number(req.body.calories);
    const date = Date.parse(req.body.date);


const newJournal = new Journal({
    username, 
    meal,
    calories,
    date,
});

newJournal.save()
.then(() => res.json('Journal entry added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;