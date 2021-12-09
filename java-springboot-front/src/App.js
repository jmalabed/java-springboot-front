import "./App.css";
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
    planet1: "",
    planet2: "",
    speedUnit: "m/s",
    speed: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("submitted");
    try {
      const fetchedCalc = await fetch(
        `https://java-space-calculator.herokuapp.com/planetCalc?planet1=${data.planet1}&planet2=${data.planet2}&speed=${data.speed}&speedUnit=${data.speedUnit}`
      );
      const parsedCalc = await fetchedCalc.json();
      console.log(parsedCalc);
      // response in DAYS
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <div className="App">
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
        <input
          type="number"
          placeholder="speed"
          name="speed"
          onChange={handleChange}
          value={data.speed}
        ></input>
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
