import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    // console.log("clicked", counter);
    // counter += 1;
    if (counter <= 19) {
      setCounter(counter + 1);
    } else {
      {
        setCounter(counter);
      }
    }
  };

  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
