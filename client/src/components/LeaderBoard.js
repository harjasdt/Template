import React, { useState, useEffect } from 'react';

export default function LeaderBoard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState('user2@example.com'); // Replace with actual logic

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch('your_api_endpoint_here');
        const data = await response.json();

        // Assuming API returns data in the format: [{ email: '...', profit: ... }, ...]
        const sortedData = data.sort((a, b) => b.profit - a.profit);
        const rankedData = sortedData.map((user, index) => ({ ...user, rank: index + 1 }));

        setLeaderboardData(rankedData);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboardData();
    const interval = setInterval(fetchLeaderboardData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">#</th>
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
              <td className="py-2">{entry.rank}</td>
              <td className="py-2">{entry.email}</td>
              <td className="py-2 text-right">${entry.profit.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
