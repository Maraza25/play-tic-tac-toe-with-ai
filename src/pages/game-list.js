// GameList.js

// Import necessary React hooks and components
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

// Define the GameList component
const GameList = () => {
  // State variable to store game results
  const [gameResults, setGameResults] = useState([]);

  // useEffect hook to fetch and set game results from local storage
  useEffect(() => {
    // Fetch game results from local storage
    const storedGameResults = JSON.parse(localStorage.getItem("gameResults")) || [];

    // Use Set to get unique values based on winner, date, and username
    const uniqueResults = Array.from(new Set(storedGameResults.map(result => JSON.stringify(result)))).map(result => JSON.parse(result));
    console.log(uniqueResults);

    // Set the unique game results in the state
    setGameResults(uniqueResults);
  }, []);

  // Define columns for the DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'winner', headerName: 'Winner', width: 150 },
    { field: 'username', headerName: 'Username', width: 150 }, // Add a new column for username
    { field: 'date', headerName: 'Date', width: 200 },
  ];

  // Map game results to rows with additional data for the DataGrid
  const rows = gameResults.map((result, index) => ({
    id: index + 1,
    winner: result.winner,
    username: result.username, // Add username to the rows
    date: result.date,
  }));

  // Return JSX for the GameList component
  return (
    <div className='flex items-center justify-center h-screen bg-gray-800 border-hidden '>
      <div className=' bg-slate-400/5  shadow-lg p-8 ' style={{ borderRadius: "20px" }}>
        {/* DataGrid component to display game results */}
        <DataGrid
          style={{ color: 'white', borderRadius: "20px", padding: "15px", height: "50vh" }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          slots={{
            footer: () => null, // Disable the default footer
          }}
        />
      </div>
    </div>
  );
};

// Export the GameList component as the default export
export default GameList;
