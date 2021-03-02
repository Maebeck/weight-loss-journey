const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WEIGHT_LOSS", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const journalRouter = require('./routes/journaldata')
const usersRouter = require('./routes/users');
app.use('/journal', journalRouter);
app.use('/users', usersRouter);
app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});