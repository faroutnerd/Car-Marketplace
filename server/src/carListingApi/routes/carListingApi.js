const express = require('express');
const router = express.Router();
const { carListingDetails } = require('../controller/controllerCarListing')

// const {  } = require("../controller/controllerCarListing");

router.get("/", (req, res) => {
    res.send("Get all Car Listing");
})

router.post("/car-listing", carListingDetails);

module.exports = router;