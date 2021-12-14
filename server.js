const path = require("path")
require('dotenv').config({ path: path.resolve(__dirname, "./.env") });
const express = require("express");
const cors= require('cors');
const mongoose = require('mongoose');


const app = express();


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,
  useFindAndModify: false});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('mongodb database connection established successfully!');
});

const customerRouter = require('./routes/customerdets');
const transactionRouter = require('./routes/trasactionhist');
 
app.use('/customers',customerRouter);
app.use('/transactions',transactionRouter);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;


app.listen(port, ()=>{
    console.log('Server Running!!!')
})