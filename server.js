const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.WEIGHT_LOSS_URI || "mongodb://localhost/WEIGHT_LOSS", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const journalRouter = require('./routes/journalRoutes');
const usersRouter = require('./routes/userRoutes');
const mealplanRouter = require('./routes/mealplanRoutes');


app.use('/mealplan', mealplanRouter);
app.use('/users', usersRouter);
app.use('/journal', journalRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});