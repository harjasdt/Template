import React, { useState, useEffect } from 'react';
import Equity from "../assets/equity.csv";
import Papa from 'papaparse';
import axios from "axios"
export default function Stock() {
    // const stockdata = JSON.parse(localStorage.getItem("stockData"));
    const storedData = JSON.parse(localStorage.getItem("userData"));
  const [investedMoney, setInvestedMoney] = useState(storedData.investedcash);
  const [currentMoney, setCurrentMoney] = useState(storedData.avalcash);
  const [profit, setProfit] = useState(storedData.profit);
  const [stocks, setStocks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [stockCode, setStockCode] = useState('');
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockData, setStockData] = useState([]);
  const [stockFormData,setStockFormData] = useState();
  const [stockName, setStockName] = useState('');

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await  axios
        .post("http://127.0.0.1:8000/api/stock-data/",{
          email:storedData.email,
        })
        .then((response)=>{
            console.log(storedData);
          localStorage.setItem("stockData", JSON.stringify(response.data.message));
          const stockdata = JSON.parse(localStorage.getItem("stockData"));
          console.log(stockdata);
          setStockData(stockdata);
        });  
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    fetchStockData();
    const interval = setInterval(fetchStockData, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Papa.parse(Equity, {
      download: true,
      header: true,
      complete: function (result) {
        setStockFormData(result.data);
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
    axios
    .post("http://127.0.0.1:8000/api/add-stock/",{
        "email":storedData.email,
        "stockcode":stockCode,
        "stockname":stockName,
        "quant":stockQuantity,
        "ltp":1,

    })
  };

  return (
    <div className="p-8">
      <div className="mb-4 space-x-4 flex items-center">
        <p className="text-xl text-[#536162] font-bold">Invested Money: {investedMoney}</p>
        <p className="text-xl text-[#536162] font-bold">Current Money: {currentMoney}</p>
        <p className="text-xl text-[#536162] font-bold">Profit: {profit}</p>
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
              {stockFormData.map((stock, index) => (
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
            <th className="text-white px-4 py-2">Stock Average</th>
            <th className="text-white px-4 py-2">Stock Quantity</th>
            <th className="text-white px-4 py-2">Stock Value</th>
            <th className="text-white px-4 py-2">Stock LTC</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="px-4 py-2">{stock.stockcode}</td>
              <td className="px-4 py-2">{stock.stockname}</td>
              <td className="px-4 py-2">{stock.avg}</td>
              <td className="px-4 py-2">{stock.quant}</td>
              <td className="px-4 py-2">{stock.value}</td>
              <td className="px-4 py-2">NA</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
