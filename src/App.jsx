import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Button from "./components/button";
import { nanoid } from "nanoid";

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
    setNum(RandomNumber());
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
  return (
    <div id="app-component">
      <h1>Play Tenzies Game</h1>
      <section id="btn-container">{RandomNumberButton}</section>
      <button id="btn" onClick={RandomNum}>
        Roll
      </button>
    </div>
  );
}

export default App;
