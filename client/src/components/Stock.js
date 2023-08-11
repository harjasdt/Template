import React, { useState, useEffect } from 'react';
import Equity from "../assets/equity.csv";
import Papa from 'papaparse';

export default function Stock() {
  const [investedMoney, setInvestedMoney] = useState(0);
  const [currentMoney, setCurrentMoney] = useState(0);
  const [stocks, setStocks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [stockCode, setStockCode] = useState('');
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockData, setStockData] = useState([]);
  const [stockName, setStockName] = useState('');

  useEffect(() => {
    Papa.parse(Equity, {
      download: true,
      header: true,
      complete: function (result) {
        setStockData(result.data);
      },
    });
  }, []);

  const handleStockCodeChange = (e) => {
    const selectedStockCode = e.target.value;
    setStockCode(selectedStockCode);

    const selectedStock = stockData.find(stock => stock.SYMBOL === selectedStockCode);
    if (selectedStock) {
      setStockName(selectedStock['NAME OF COMPANY']);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Calculate stock average and ltc
    const stockAverage = 10; // calculate stock average based on your logic;
    const stockLTC = 10; // calculate stock ltc based on your logic;

    const newStock = {
      stockCode,
      stockName,
      stockQuantity,
      stockAverage,
      stockLTC,
    };

    setStocks([...stocks, newStock]);
    setIsFormOpen(false);
    setStockCode('');
    setStockQuantity(0);
    setStockName('');
  };

  return (
    <div className="p-8">
      <div className="mb-4 space-x-4 flex items-center">
        <p className="text-xl text-[#536162] font-bold">Invested Money: {investedMoney}</p>
        <p className="text-xl text-[#536162] font-bold">Current Money: {currentMoney}</p>
        <button
          className="bg-[#424642] text-white px-4 py-2 rounded hover:bg-[#C06014]"
          onClick={() => setIsFormOpen(true)}
        >
          Add Stock
        </button>
      </div>

      {isFormOpen && (
        <div className="p-4 border rounded">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <select
              value={stockCode}
              onChange={handleStockCodeChange}
              className="p-2 border rounded w-full"
            >
              <option value="" >Select Stock Code</option>
              {stockData.map((stock, index) => (
                <option key={index} value={stock.SYMBOL}>
                  {stock.SYMBOL}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Stock Quantity"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Stock Name"
              value={stockName}
              onChange={(e) => setStockName(e.target.value)}
              className="p-2 border rounded w-full"
            />
            <button
              type="submit"
              className="bg-[#424642] text-white px-4 py-2 rounded hover:bg-[#C06014]"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <table className="mt-4 w-full border ">
        <thead>
          <tr className='bg-[#424642]'>
            <th className="text-white px-4 py-2">Stock Code</th>
            <th className="text-white px-4 py-2">Stock Name</th>
            <th className="text-white px-4 py-2">Stock Quantity</th>
            <th className="text-white px-4 py-2">Stock Average</th>
            <th className="text-white px-4 py-2">Stock LTC</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="px-4 py-2">{stock.stockCode}</td>
              <td className="px-4 py-2">{stock.stockName}</td>
              <td className="px-4 py-2">{stock.stockQuantity}</td>
              <td className="px-4 py-2">{stock.stockAverage}</td>
              <td className="px-4 py-2">{stock.stockLTC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
