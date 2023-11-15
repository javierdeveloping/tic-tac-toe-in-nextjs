"use client";
import { useState } from "react";
import Board from "./board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory]: Array<any> = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  console.log({ currentSquares });
  function handlePlay(nextSquares: any) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
