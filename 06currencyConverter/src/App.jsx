import { useState } from "react";

import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-orange-500 text-center">Currency app</h1>
    </>
  );
}

export default App;
