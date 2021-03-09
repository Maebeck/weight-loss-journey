const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


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
if (process.env.NODE_ENV === "production") {
    app.use(express.static("weight-loss-app/build"));
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "../weight-loss-app/build/index.html"));
      });
  } else app.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname+'weight-loss-app/public/index.html'))
});


app.use(require('./routes'))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});