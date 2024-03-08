import React, { useContext } from "react";
import { Appcontext } from "../App";

export const GameOver = () => {
  const { gameOver, setGameOver, correctWord, currAttempt } = useContext(Appcontext);

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord ? "You correctly guessed the word" : "You Failed"}
      </h3>
      <h1>Correct: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
};
