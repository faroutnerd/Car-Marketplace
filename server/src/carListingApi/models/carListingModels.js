const mongoose = require("mongoose");


const carDetailSchema = new mongoose.Schema ({
    listingTitle: { type: String, required: true },
    tagline: { type: String },
    originalPrice: { type: String },
    sellingPrice: { type: String, required: true },
    category: { type: String, required: true },
    condition: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    driveType: { type: String, required: true },
    transmission: { type: String, required: true },
    fuelType: { type: String, required: true },
    mileage: { type: Number, required: true },
    engineSize: { type: String },
    cylinder: { type: Number },
    color: { type: String, required: true },
    door: { type: Number, required: true },
    vin: { type: String },
    offerType: { type: String },
    listingDescription: { type: String, required: true },
    features: [String]
  });

module.exports = mongoose.model("CarDetails", carDetailSchema);