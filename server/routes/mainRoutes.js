const express = require("express");
const router = express.Router();
const carListingRoutes = require("../src/carListingApi/routes/carListingApi");

router.use("/carListing", carListingRoutes);

module.exports = router;