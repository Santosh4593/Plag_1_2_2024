import React, { useState } from "react";

const TextComparison = () => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');

  const handleTextInputChange1 = (e) => {
    setTextInput1(e.target.value);
  };

  const handleTextInputChange2 = (e) => {
    setTextInput2(e.target.value);
  };

  const handleCompare = () => {
    // Implement your logic for comparing the two texts here
    console.log("Comparing text 1:", textInput1);
    console.log("Comparing text 2:", textInput2);
  };

  return (
    <div className="bg-cover bg-center flex items-center justify-center h-screen mt-10 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl p-6 mt-10 mb-20 mx-auto">
        <h1 className="text-3xl font-bold mt-10 mb-4 text-center text-cyan-600">
          Text Comparison
        </h1>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex justify-between w-full max-w-lg">
            <div className="w-full mr-2">
              <h2 className="text-lg font-semibold mb-2 text-left">Text 1</h2>
              <textarea
                value={textInput1}
                onChange={handleTextInputChange1}
                className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring focus:ring-cyan-500"
                rows="5"
                placeholder="Enter text for comparison..."
              ></textarea>
            </div>
            <div className="w-full ml-2">
              <h2 className="text-lg font-semibold mb-2 text-left">Text 2</h2>
              <textarea
                value={textInput2}
                onChange={handleTextInputChange2}
                className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring focus:ring-cyan-500"
                rows="5"
                placeholder="Enter text for comparison..."
              ></textarea>
            </div>
          </div>
          <div className="w-full max-w-lg flex flex-col items-center justify-center">
            <button
              onClick={handleCompare}
              className="bg-cyan-500 text-black font-semibold px-4 py-2 rounded block w-full mb-4"
            >
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextComparison;
