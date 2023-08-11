import React, { useState, useEffect } from 'react';
import { HiX } from "react-icons/hi";
import axios from "axios"
export default function LeaderBoard() {
  const stockdata = JSON.parse(localStorage.getItem("stockData"));
  const storedData = JSON.parse(localStorage.getItem("userData"));
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState('user2@example.com'); // Replace with actual logic
  // const refresh = ()=>{
  //   axios
  //   .get("http://127.0.0.1:8000/api/leaders-data/",{})
  //   .then((response)=>{
  //     localStorage.setItem("leaderData", JSON.stringify(response.data.message));
  //     console.log(response);
  //     setLeaderboardData(response.data.message)
  //   });
  // }

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/leaders-data/');
        const data = await response.json();
        console.log(data.message);
        // Assuming API returns data in the format: [{ email: '...', profit: ... }, ...]
        const sortedData = data.message.sort((a, b) => b.profit - a.profit);
        const rankedData = sortedData.map((user, index) => ({ ...user, rank: index + 1 }));

        setLeaderboardData(rankedData);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };
    fetchLeaderboardData();
    const interval = setInterval(fetchLeaderboardData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <button>Refresh
              <HiX className="text-white text-2xl" />
            </button>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Rank</th>
            <th className="text-left">Email</th>
            <th className="text-right">Profit</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr
              key={index}
              className={`border-b ${entry.email === currentUserEmail ? 'bg-yellow-200' : ''}`}
            >
              <td className="py-2">{index}</td>
              <td className="py-2">{entry.email}</td>
              <td className="py-2">{entry.profit}</td>
              {/* <td className="py-2 text-right">${entry.profit.toFixed(2)}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
