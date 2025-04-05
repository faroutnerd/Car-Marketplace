import React, { useState } from "react";
import axios from "axios";
import Header from "../Header";
import carDetails from "@/Shared/carDetails.json";
import features from "@/Shared/features.json"
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import UploadImages from "./components/UploadImages";
import { Separator } from "../ui/separator";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import IconField from "./components/IconField";


const AddListing = () => {

  const [formData, setFormData] = useState({});
  const [featureData, setFeatureData] = useState([]); 

  const handleInputChange=(name, value)=>{
    setFormData((prevData)=>({
      ...prevData,
      [name]: value
    }))
  }


  const handleFeatureChange = (name, value) => {
    setFeatureData((prevData) => {
      if (value) return [...prevData, name];  // Add feature
      return prevData.filter((feature) => feature !== name);  // Remove feature
    });
  };
  

  const onSubmit= async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/v1/carListing/car-listing", {
        ...formData,
        features: featureData, 
      });
    } catch (error) {
      console.error("Error saving car listing:", error);
      res.status(500).json({ message: error.message });
    }
  }

  

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10">
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Deatils</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {carDetails.carDetails.map((item, index) => (
                  <div key={index}>
                    <label className="text-sm flex gap-2 items-center mb-1">
                      <IconField icon={item?.icon}/>
                      {item?.label} {item.required&&<span className="text-red-500">*</span>}
                    </label>
                    {item.fieldType == "text" || item.fieldType == "number" ? (
                      <InputField item={item} handleInputChange={handleInputChange} />
                    ) 
                    : item.fieldType=='dropdown'?<DropdownField item={item} handleInputChange={handleInputChange} />
                    : item.fieldType=='textarea'?<TextAreaField item={item} handleInputChange={handleInputChange} />
                    : null}

                  </div>
                ))}
            </div>
          </div>

          <Separator className='my-6'/>

          {/* Feature List */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {features.features.map((item, index)=>(
                  <div className="flex gap-2 items-center">
                    <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name, value)} /> <h2>{item.label}</h2>
                  </div>
                ))}
            </div>
          </div>

          {/* Car Images */}
          <Separator className='m-6' />

          <UploadImages />

          <div className="mt-10 flex justify-end">
            <Button type="submit" onClick={(e)=>onSubmit(e)}>Submit</Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddListing;
