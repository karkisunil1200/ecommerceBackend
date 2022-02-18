const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://skarki:Nepal123@cluster0.pgouj.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("DBConnection Successfull"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Backend server is running....");
});
