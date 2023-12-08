// Import React and necessary hooks
import React, { useEffect, useState } from 'react';

// Define the TicTacToe component
const TicTacToe = () => {
  // State variables for the game board, current player, user input, board size, custom background color, username, and initial board size
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [inputArray, setInputArray] = useState("");
  const [boardSize, setBoardSize] = useState(null);
  const [customBackgroundColor, setCustomBackgroundColor] = useState("");
  const [username, setUsername] = useState(null);
  const [initialBoardSize, setInitialBoardSize] = useState(3); // Default size is 3x3

  // useEffect hook to handle initial setup and updates when initialBoardSize changes
  useEffect(() => {
    // Retrieve board size from local storage or use the initial size
    const size = parseInt(localStorage.getItem("boardSize")) || initialBoardSize;
    setBoardSize(size);
    setInitialBoardSize(size); // Save initial board size

    // Retrieve username from local storage
    setUsername(localStorage.getItem("username"));

    // Set the initial game board and custom background color from local storage
    setBoard(Array(size * size).fill(""));
    const storedBackgroundColor = localStorage.getItem("backgroundColor");
    setCustomBackgroundColor(storedBackgroundColor);
  }, [initialBoardSize]);

  // Function to handle a square click
  const handleSquareClick = async (index) => {
    if (board[index] === "" && currentPlayer === "X") {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      // Check for a winner
      const winner = calculateWinner(newBoard, boardSize);

      // If there is a winner, log and save the result locally
      if (winner === "X" || winner === "O") {
        console.log(`Winner: ${winner}`);
        const gameResults = JSON.parse(localStorage.getItem("gameResults")) || [];
        gameResults.push({ winner, date: new Date().toLocaleString(), username });
        localStorage.setItem("gameResults", JSON.stringify(gameResults));
      }

      // If it's a draw, restart the game after a delay
      if (getStatus(newBoard) === "It's a draw!") {
        setTimeout(() => {
          setBoard(Array(boardSize * boardSize).fill(""));
        }, 1000);
      } else {
        // Switch to the next player or trigger AI move
        setCurrentPlayer("O");
        if (winner === "X" || winner === "O") {
          // If there is a winner, navigate to the game list page after a delay
          setTimeout(() => {
            window.location.href = '/game-list';
          }, 1000);
        } else {
          // If it's not the end of the game, trigger the AI move
          const AIMove = await fetchData(JSON.stringify(newBoard));
          console.log(AIMove.lastMessage);
          // Handle the AI move
          handleFormSubmit(AIMove.lastMessage);
        }
      }
    }
  };

  // Function to handle the form submission (AI move)
  const handleFormSubmit = (res) => {
    const parsedArray = JSON.parse(res);
    if (Array.isArray(parsedArray)) {
      setBoard(parsedArray);
      setCurrentPlayer("X");
    } else {
      console.error("Invalid input or not the right turn. Please enter a valid array.");
    }
  };

  // Function to render a square on the game board
  const renderSquare = (index) => {
    return (
      <button className="w-20 h-20 m-2  bg-slate-300 font-bold hover:bg-slate-400" style={{ backgroundColor: customBackgroundColor, borderRadius: '10px' }} onClick={() => handleSquareClick(index)}>
        {board[index] !== "" ? board[index] : "‎"}
      </button>
    );
  };

  // Function to get the game status
  const getStatus = (newBoard) => {
    const winner = calculateWinner(newBoard, boardSize);
    console.log(`Winner: ${winner}`);
    if (winner === "X" || winner === "O") {
      // Save game result locally
      const gameResults = JSON.parse(localStorage.getItem("gameResults")) || [];
      gameResults.push({ winner, date: new Date().toLocaleString(), username });
      localStorage.setItem("gameResults", JSON.stringify(gameResults));
      // Navigate to the game list page after a delay
      setTimeout(() => {
        window.location.href = '/game-list';
      }, 1000);
      return `Winner: ${winner}`;
    } else if (newBoard.every((square) => square !== "")) {
      return "It's a draw!";
    } else {
      return `Next player: ${currentPlayer}`;
    }
  };

  // Function to calculate the winner of the game
  const calculateWinner = (squares, boardSize) => {
    const lines = [];

    // Generate possible winning combinations
    for (let i = 0; i < boardSize; i++) {
      lines.push(Array.from({ length: boardSize }, (_, j) => i * boardSize + j));
      lines.push(Array.from({ length: boardSize }, (_, j) => j * boardSize + i));
    }

    lines.push(Array.from({ length: boardSize }, (_, i) => i * (boardSize + 1)));
    lines.push(Array.from({ length: boardSize }, (_, i) => (i + 1) * (boardSize - 1)));

    // Check each combination for a winner
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let countX = 0;
      let countO = 0;

      for (let j = 0; j < line.length; j++) {
        const index = line[j];
        const square = squares[index];

        if (square === 'X') {
          countX++;
        } else if (square === 'O') {
          countO++;
        }
      }

      if (countX === boardSize) {
        return 'X'; // X won
      } else if (countO === boardSize) {
        return 'O'; // O won
      }
    }

    return null; // No winner
  };

  // Return the JSX for the TicTacToe component
  return (
    <div className='bg-slate-700 h-screen flex flex-col items-center justify-center'>
      {/* Buttons for navigating to the game list and settings pages */}
      <div className="buttons-container absolute top-0 right-0 m-4 flex">
        <button onClick={() => { window.location.href = '/game-list'; }}>
          <img src="/cup.svg" className='w-10 m-2' alt="Liste" />
        </button>
        <button onClick={() => { window.location.href = '/setting'; }}>
          <img src="/settings.svg" className='w-10 m-2' alt="Ayarlar" />
        </button>
      </div>

      {/* Display the game status */}
      <div className="status w-full text-center mb-4 font-bold text-white scale-150">
        {getStatus(board) === "It's a draw!"
          ? "It's a draw! Game restarts in 2 seconds"
          : getStatus(board)}
      </div>

      {/* Render the game board */}
      <div style={{ flexDirection: "column", display: 'flex' }}>
        {Array.from({ length: boardSize }, (_, rowIndex) => (
          <div key={rowIndex} className="flex flex-row">
            {Array.from({ length: boardSize }, (_, colIndex) => (
              renderSquare(rowIndex * boardSize + colIndex)
            ))}
          </div>
        ))}
      </div>

      {/* Restart button */}
      <button className="mt-4 px-4 py-2 bg-slate-800 hover:bg-blue-900 text-white " style={{ borderRadius: '10px' }} onClick={() => {
        window.location.reload();
      }}>
        Restart
      </button>
    </div>
  );
};

// Function to fetch data from the server (AI move)
const fetchData = async (d) => {
  const response = await fetch('/api/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: d }),
  });

  const data = await response.json();
  return data;
};

// Export the TicTacToe component as the default export
export default TicTacToe;
