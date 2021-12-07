import "./App.css";
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
    planet1: "",
    planet2: "",
    speedUnit: "",
  });
  const planets = [
    "Pick one!",
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];
  const speedUnit = ["m/s", "mph", "km/s"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="App">
      <p>new App</p>
      <h1>Space Travel</h1>
      <form onSubmit={handleSubmit}>
        <p>Select a planet to start from:</p>
        <Dropdown
          arr={planets}
          name={"planet1"}
          setData={setData}
          data={data}
        />

        <p>Select a destination planet</p>
        <Dropdown
          arr={planets}
          name={"planet2"}
          setData={setData}
          data={data}
        />

        <p>How fast are we going?</p>
        <input type="text" placeholder="speed"></input>
        <Dropdown
          arr={speedUnit}
          name={"speedUnit"}
          setData={setData}
          data={data}
        />
        <input type="submit" value="Calculate!"></input>
      </form>
    </div>
  );
}

export default App;
