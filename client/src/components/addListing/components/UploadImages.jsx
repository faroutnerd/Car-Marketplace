import { storage } from 'configs/firebaseConfig';
import { React, useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";

const UploadImages = () => {

    const [selectedFileList, setSelectedFileList] = useState([]);
    const onFileSelected = (event) => {
        const files = event.target.files;

        for (let i = 0; i < files?.length; i++) {
            const file = files[i];
            // const objectUrl = URL.createObjectURL(file);
            // console.log(objectUrl);
            setSelectedFileList((prev) => [...prev, file]);
        }
    }

    const onImageRemove = (image, index) => {
        const result = selectedFileList.filter((item) => item != image);
        setSelectedFileList(result);
    }

    const UploadImages=()=>{
        const fileName=Date.now()+'jpeg';
        const storageRef=ref(storage)   //yahan se shuru hoga 2:48:00
    }

    return (
        <div>
            <h2 className="font-medium text-xl my-3">Upload Images</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

                {selectedFileList.map((image, index) => (
                    <div key={index} className="">
                        <h2><RxCrossCircled className='absolute m-2 text-white font-bold text-lg hover:cursor-pointer' 
                        onClick={()=>onImageRemove(image, index)}/></h2>
                        <img src={URL.createObjectURL(image)} alt="car" className="w-full h-[130px] object-cover rounded-xl" />
                    </div>
                ))}

                <label htmlFor="upload-images">
                    <div className="border rounded-xl border-dotted border-blue-700 bg-blue-100 p-4 cursor-pointer hover:shadow-md">
                        <h2 className='text-lg text-center text-blue-700'>+</h2>
                    </div>
                </label>
                <input type="file" multiple={true} id='upload-images' onChange={onFileSelected} className='opacity-0' />
            </div>
        </div>
    )
}

export default UploadImages