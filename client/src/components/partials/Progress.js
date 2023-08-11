import React, { useState, useEffect } from 'react';
import axios from "axios"
export default function Progress({}) {
  const[count,setCount] = useState()
  const storedData = JSON.parse(localStorage.getItem("userData"));
  // let count = storedData.progress;
  useEffect(() => {
    const fetchStoredData = async () => {
      try {
        const response = await  axios
        .post("http://127.0.0.1:8000/api/alldata/",{
          email:storedData.email,
        })
        .then((response)=>{
          setCount(response.data.message.progress)
        });  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchStoredData();
    const interval = setInterval(fetchStoredData, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="progressBar mt-5">
        <h2 className="text-2xl font-semibold">Your Progress Level:</h2>
        <div className="relative h-8 bg-gray-300 mt-2">
          <div
            className="absolute h-full bg-green-400 "
            style={{ width: count + "%" }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Advanced</span>
        </div>
      </div>
    </>
  );
}
