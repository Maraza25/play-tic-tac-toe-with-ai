<!-----



Conversion time: 0.591 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β35
* Thu Dec 07 2023 12:10:41 GMT-0800 (PST)
* Source doc: Adsız doküman
* This is a partial selection. Check to make sure intra-doc links work.
----->



# **Tic Tac Toe Game**


## **Introduction**

Welcome to the Tic Tac Toe Game project! This project is a simple turn-based Tic Tac Toe game implemented using Next.js, React, and other technologies.


## **Table of Contents**



* [Requirements](https://chat.openai.com/c/aa46e6c3-ffcc-4188-9a28-3255c935a6c4#requirements)
* [Features](https://chat.openai.com/c/aa46e6c3-ffcc-4188-9a28-3255c935a6c4#features)
* [Getting Started](https://chat.openai.com/c/aa46e6c3-ffcc-4188-9a28-3255c935a6c4#getting-started)
* [Screens](https://chat.openai.com/c/aa46e6c3-ffcc-4188-9a28-3255c935a6c4#screens)
* [Game Logic](https://chat.openai.com/c/aa46e6c3-ffcc-4188-9a28-3255c935a6c4#game-logic)
* [Bonus Features](https://chat.openai.com/c/aa46e6c3-ffcc-4188-9a28-3255c935a6c4#bonus-features)
* [Version Control](https://chat.openai.com/c/aa46e6c3-ffcc-4188-9a28-3255c935a6c4#version-control)
* [Contributing](https://chat.openai.com/c/aa46e6c3-ffcc-4188-9a28-3255c935a6c4#contributing)
* [License](https://chat.openai.com/c/aa46e6c3-ffcc-4188-9a28-3255c935a6c4#license)


## **Requirements**

To run this project, you need to have the following installed:



* Node.js
* npm (Node Package Manager)


## **Features**



* Simple turn-based Tic Tac Toe game.
* Game creation with customizable options: game name, board background color.
* User authentication via name entry.
* List of created games with detailed game data.
* Automatic game restart on a draw.
* Recognition of game completion and prevention of re-entry.


## **Getting Started**



1. Clone the repository:
2. bash
3. Copy code


```
gh repo clone Maraza25/play-tic-tac-toe-with-ai
```

 Navigate to the project directory:



```
cd tic-tac-toe
```

 Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```



16. 
17. Open your browser and go to[ http://localhost:3000](http://localhost:3000/) to view the application.



## **OpenAI Assistant Settings**

**Note: Please make sure to create a .env file in your project with the following configuration:**
```dotenv
OPENAI_API_KEY=Your_api_key
ASSISTANT_ID=Your_assistant_id
```

**Instructions**
```dotenv
Do not change the filled parts in the array I send you. Add your move to the empty parts and send it back to me.
You play tic-tac-toe very well Play the game to win, losing is shameful. We will play tic-tac-toe in array format like this: ["", "", "", "", "", "", "", "X", "",], ["", "", "", "", "", "", "", "", "", "", "", "X", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "X", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
If there are three X's in a row, column, or diagonally, indicating that X is about to win the game, prioritize preventing this. In addition, try to win the game by strategically placing O's, but remember that you can make at most 1 move.
In this way, we will have three different arrays. I'm asking you to make a move in place of whoever's turn it is and send it back to me. When you message me, don't write your own comments, just send the array.
```
**Model:** gpt-4-1106-preview
## **Screens**



1. Name Entry Screen:
    * If the user has not entered a name before, they will see a name entry field.
    * The user must enter their name to access the game list.
2. Game Create Screen:
    * Allows users to create a new game.
    * Customizable options: game name, board background color.
3. Game List Screen:
    * Lists all created games with relevant game data.
    * Requires user authentication (name entry) to access.
4. Game Screen:
    * Displays the Tic Tac Toe game.
    * Background color is set based on the color chosen during game creation.
    * Follows standard Tic Tac Toe game rules.
    * Automatic restart on a draw.
    * Game completion recognition.


## **Game Logic**



* Each game is played against the computer.
* The user places an "X," and the computer responds with an "O."
* Standard Tic Tac Toe game rules apply.
* Game restarts automatically on a draw.
* Completed games are marked as such on the game list screen.


## **Bonus Features**



* AI Development:
    * Computer games include AI (OpenAI) for enhanced gameplay.
* Grid Customization:
    * Game create screen includes options for grid customization (more than 3 columns and 3 rows).


## **Version Control**



* This project uses Git for version control.
* Every development step is committed to the project repository.


## **Contributing**

Contributions are welcome! Feel free to submit issues or pull requests.
