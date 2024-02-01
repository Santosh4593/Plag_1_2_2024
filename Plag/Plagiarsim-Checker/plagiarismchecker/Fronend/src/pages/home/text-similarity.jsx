import React, { useState } from "react";

const Text = () => {
  const [textInput, setTextInput] = useState('');

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleGetStarted = async () => {
    // Implement your logic for initiating the process here
    console.log("Initiate process with text:", textInput);
  };

  const handleSurvey = () => {
    // Implement your logic for handling survey here
    console.log("Handling survey");
  };

  return (
    <div className="bg-cover bg-center flex items-center justify-center h-screen mt-10 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 overflow-y-auto">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl p-6 mt-10 mb-20 mx-auto">
        <h1 className="text-3xl font-bold mt-10 mb-4 text-center text-cyan-600">
          Text Plagiarism
        </h1>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-2 text-left">Enter Text</h2>
            <textarea
              value={textInput}
              onChange={handleTextInputChange}
              className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring focus:ring-cyan-500"
              rows="5"
              placeholder="Enter your text here..."
            ></textarea>
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

export default Text;
