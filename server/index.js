const express = require('express');
const mainRoutes = require("./routes/mainRoutes");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";

const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }));

mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("MongoDB connection failed: ", error);
    })

app.use("/v1", mainRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});