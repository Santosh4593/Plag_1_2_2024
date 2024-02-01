import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultPage from "./result";


const Image = () => {
  const [image, setImage] = useState(null);
  const [apiResult, setApiResult] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
    // const decodeBase64Image = () => {
    //   if (!image) {
    //     console.error("No image available for decoding");
    //     return;
    //   }
  
    //   // Convert data URL string to Blob if necessary
    //   const imageData = typeof image === "string" ? dataURItoBlob(image) : image;
  
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     const base64String = reader.result.split(',')[1];
    //     setDecodedImage(`data:image/jpeg;base64,${base64String}`);
    //   };
    //   reader.readAsDataURL(imageData);
    // };


  const handleGetStarted = async () => {
    // Check if image is available
    if (!image) {
      console.error("No image available for submission");
      return;
    }
    // decodeBase64Image();
  
    // Create FormData object to send the image as multipart/form-data
    const formData = new FormData();
    formData.append("file", image, "image.png");

    
  
    // Make API call on submit
    try {
      const response = await fetch("http://127.0.0.1:8000/image_plagiarism_check/", {
        method: "POST",
        body: formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
        
      });
  
      if (response.ok) {
        const result = await response.json();
        setApiResult(result);
        navigate(`/result/${result.link}`);
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("Error during API request:", error);
    }
  };
  

  return (
    <div className="bg-cover bg-center flex items-center justify-center h-screen mt-10 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 overflow-y-auto">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl p-6 mt-10 mb-20 mx-auto">
        <h1 className="text-3xl font-bold mt-10 mb-4 text-center text-cyan-600">
          Image Plagiarism
        </h1>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-2 text-left">Upload Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring focus:ring-cyan-500"
            />
          </div>
          <div className="w-full max-w-lg flex flex-col items-center justify-center">
            <button
              onClick={handleGetStarted}
              className="bg-cyan-500 text-black font-semibold px-4 py-2 rounded block w-full mb-4"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
