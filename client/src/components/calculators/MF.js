import React, { useState } from "react";
import "../../cssFiles/profile.css";
import Nav from "../Nav";
function MF() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(null);

  const calculateMutualFunds = () => {
    const yearlyRate = rate / 100;
    const totalYears = time;
    const futureValue = principal * Math.pow(1 + yearlyRate, totalYears);
    setResult(futureValue.toFixed(2));
  };

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Mutual Funds Calculator
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Principal Amount:
            </label>
            <input
              className="px-3 py-2 border rounded-md w-full"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Annual Growth Rate (%):
            </label>
            <input
              className="px-3 py-2 border rounded-md w-full"
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Investment Period (years):
            </label>
            <input
              className="px-3 py-2 border rounded-md w-full"
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button
            className="bg-[#C06014] text-white px-4 py-2 rounded-md w-full hover:bg-[#536162]"
            onClick={calculateMutualFunds}
          >
            Calculate
          </button>
          {result && (
            <div className="mt-4 text-center">Future Value: {result}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default MF;
