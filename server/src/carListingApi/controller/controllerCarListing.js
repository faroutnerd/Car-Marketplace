const CarDetails = require("../models/carListingModels");

// const getAllDetails = async (req, res) => {
//   const { car_id } = req.body;
//   try {
//     if (car_id) {
//       const carDetail = await CarListing.findById(car_id);
//       res.status(200).json(carDetail);
//     } else {
//       const allCarDetail = await CarListinig.find();
//       res.status(200).json(allCarDetail);
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const carListingDetails = async (req, res) => {
  const {
    listingTitle, tagline, originalPrice, sellingPrice,
    category, condition, make, model, year, driveType, 
    transmission, fuelType, mileage, engineSize, cylinder, 
    color, door, vin, offerType, listingDescription,
  } = req.body;
  try {
    const newCarListing = await CarDetails.create({
        listingTitle: listingTitle,
        tagline: tagline,
        originalPrice: originalPrice,
        sellingPrice: sellingPrice,
        category: category,
        condition: condition,
        make: make,
        model: model,
        year: year,
        driveType: driveType,
        transmission: transmission,
        fuelType: fuelType,
        mileage: mileage,
        engineSize: engineSize,
        cylinder: cylinder,
        color: color,
        door: door,
        vin: vin,
        offerType: offerType,
        listingDescription: listingDescription,
        features: req.body.features,
    });
    res.status(200).json(newCarListing);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

module.exports = {carListingDetails};
