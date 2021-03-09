const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('weight-loss-app/public'));
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.WEIGHT_LOSS_URI || "mongodb://localhost/WEIGHT_LOSS", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(require('./routes'))
app.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname+'/weight-loss-app/public/index.html'))
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});