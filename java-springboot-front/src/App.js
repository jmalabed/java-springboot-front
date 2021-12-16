import "./App.css";
import Dropdown from "./components/Dropdown";
import { useState, useEffect } from "react";
import rocketrocketrocketship from "./img/rocket-travel-no-bkg.png";
import earth from "./img/earth.png";
import jupiter from "./img/jupiter.png";
import mars from "./img/mars.png";
import neptune from "./img/neptune.png";
import saturn from "./img/saturn.png";
import uranus from "./img/uranus.png";
import venus from "./img/venus.png";
import mercury from "./img/mercury.png";
import { Container } from "react-bootstrap";
function App() {
  const [data, setData] = useState({
    planet1: "",
    planet2: "",
    speedUnit: "m/s",
    speed: "",
  });
  const [travelTime, setTravelTime] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
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

  const planetImg = [
    null,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  ];
  const speedUnit = ["m/s", "mph", "km/s"];

  const fetchCalc = async () => {
    try {
      const fetchedCalc = await fetch(
        `https://java-space-calculator.herokuapp.com/planetCalc?planet1=${data.planet1}&planet2=${data.planet2}&speed=${data.speed}&speedUnit=${data.speedUnit}`
      );
      const parsedCalc = await fetchedCalc.json();
      if (parsedCalc.error !== "Bad Request") {
        setTravelTime(parsedCalc);
      }
      // response in DAYS
    } catch (e) {
      console.log(e);
    } finally {
      setIsHidden(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsHidden(false);
    fetchCalc();
  };

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const timeToTravel = () => {
    if (travelTime !== "") {
      return <p className="time text">{travelTime.time} DAYS</p>;
    }
  };

  const rocketLoader = () => {
    if (!isHidden) {
      return (
        <img
          src={rocketrocketrocketship}
          id="rocketImg"
          className="rocketrocketrocketship"
          alt="rocketship space travel"
        />
      );
    } else if (isHidden) {
      return (
        <div className="rocketSpacer">
          <br />
        </div>
      );
    }
  };

  // run fetch calc on page load to get faster response from heroku!
  useEffect(() => {
    fetchCalc();
  }, []);

  useEffect(() => {
    rocketLoader();
  }, [isHidden]);

  return (
    <div className="App">
      <h1 className="text">Space Travel</h1>
      <form onSubmit={handleSubmit}>
        <p className="text">Select a planet to start from:</p>
        <Dropdown
          arr={planets}
          name={"planet1"}
          setData={setData}
          data={data}
        />

        <p className="text">Select a destination planet</p>
        <Dropdown
          arr={planets}
          name={"planet2"}
          setData={setData}
          data={data}
        />

        <p className="text">How fast are we going?</p>
        <input
          type="number"
          placeholder="speed"
          name="speed"
          onChange={handleChange}
          className="speed"
          value={data.speed}
        ></input>
        <Dropdown
          arr={speedUnit}
          name={"speedUnit"}
          setData={setData}
          data={data}
        />
        <br />
        <input type="submit" value="Calculate!" className="button"></input>
      </form>
      {timeToTravel()}
      {rocketLoader()}
      <Container>
        <div className="d-flex justify-content-center">
          <img
            src={planetImg[planets.indexOf(data.planet1)]}
            className="planet"
          />
          <img
            src={planetImg[planets.indexOf(data.planet2)]}
            className="planet"
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
