const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const routes = require('./routes/index');
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.WEIGHT_LOSS_URI || "mongodb://localhost/WEIGHT_LOSS", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("weight-loss-app/build"));
//   };



if(process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("weight-loss-app/build"))
    // app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "weight-loss-app", "build", "index.html")))
  }
app.use(routes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});