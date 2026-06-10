import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Button from "./components/button";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [num, setNum] = useState(RandomNumber());

  function RandomNumber() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  function RandomNum() {
    setNum((prev) =>
      prev.map((item) =>
        item.isHeld ? item : { ...item, value: Math.ceil(Math.random() * 6) },
      ),
    );
  }

  function hold(id) {
    setNum((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item,
      ),
    );
  }

  let RandomNumberButton = num.map((obj, index) => (
    <Button
      value={obj.value}
      isHeld={obj.isHeld}
      id={obj.id}
      key={obj.id}
      hold={hold}
    />
  ));
  // let count = 0;
  // let number = 0;
  // num.map((item) => {
  //   if (item.isHeld) {
  //     count = count + 1;
  //   }
  //   if (item.value === num[1].value) {
  //     number = number + 1;
  //   }
  // });
  // count == num.length && num.length == number
  // ? alert("congratulation you won the game!")
  // : null;

  let gameWon =
    num.every((item) => item.isHeld) &&
    num.every((item) => item.value === num[0].value);
  console.log(gameWon);
  function handleNewGame() {
    setNum(RandomNumber());
  }
  return (
    <div id="app-component">
      {gameWon && <Confetti />}
      <h1>Play Tenzies Game</h1>
      <section id="btn-container">{RandomNumberButton}</section>
      <button id="btn" onClick={gameWon ? handleNewGame : RandomNum}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </div>
  );
}

export default App;
