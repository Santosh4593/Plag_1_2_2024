import React, { useState } from "react";

const FileComparison = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Change = (e) => {
    setFile1(e.target.files[0]);
  };

  const handleFile2Change = (e) => {
    setFile2(e.target.files[0]);
  };

  const handleCompareFiles = () => {
    // Implement your logic for comparing the files here
    console.log("Comparing file 1:", file1);
    console.log("Comparing file 2:", file2);
  };

  return (
    <div className="bg-cover bg-center flex items-center justify-center h-screen mt-10 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 overflow-y-auto">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl p-6 mt-10 mb-20 mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold mt-10 mb-4 text-center text-cyan-600">
          File Comparison
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-left">File 1</h2>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleFile1Change}
              className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring focus:ring-cyan-500"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-left">File 2</h2>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleFile2Change}
              className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring focus:ring-cyan-500"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleCompareFiles}
            className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded hover:bg-cyan-600"
          >
            Compare Files
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileComparison;
