import "./App.css";
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";

function App() {
  const [planet1, setPlanet1] = useState("");
  const [planet2, setPlanet2] = useState("");
  const planets = [
    "earth",
    "mars",
    "mercury",
    "neptune",
    "jupiter",
    "saturn",
    "uranus",
    "venus",
  ];
  const speedUnit = ["m/s", "mph", "km/s"];
  return (
    <div className="App">
      <p>new App</p>
      <h1>need the following:</h1>

      <p>planet1 string</p>
      <Dropdown arr={planets} />

      <p>planet2 string</p>
      <Dropdown arr={planets} />

      <p>speed double</p>
      <input type="text" placeholder="speed"></input>

      <p>speedUnit string</p>
      <Dropdown arr={speedUnit} />
    </div>
  );
}

export default App;
