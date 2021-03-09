const router = require('express').Router();
let User = require ('../../models/usermodel');

// Get All Users
router.route('/users').get((req, res) => {
    User.all
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CRUD

// Create User
router.route('/users').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Read User
router.route('/users/{:id}').get((req, res) => {
    User.find(id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update User
router.route('/users/{:id}').patch((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete User
router.route('/users/{:id}').delete((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;