import React from 'react';
import { FaBeer, FaCoffee } from 'react-icons/fa';
import { MdAlarm, MdFavorite } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { GiHamburgerMenu, GiPizzaSlice } from 'react-icons/gi';
import { TiWeatherSunny, TiWeatherCloudy } from 'react-icons/ti';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>React Icons Demo v2</h1>

      {/* Basic Usage */}
      <h2>Basic Usage</h2>
      <p>
        Let's have a <FaBeer /> and a <FaCoffee />!
      </p>

      {/* Dynamic Icon Rendering */}
      <h2>Dynamic Icon Rendering</h2>
      <button className="icon-button">
        <TiWeatherSunny className="icon" />
      </button>
      <button className="icon-button">
        <TiWeatherCloudy className="icon" />
      </button>

      {/* Custom Styling */}
      <h2>Custom Styling</h2>
      <MdAlarm className="custom-icon alarm" />
      <MdFavorite className="custom-icon favorite" />

      {/* Interactive Icons */}
      <h2>Interactive Icons</h2>
      <button className="icon-button">
        <AiOutlinePlus className="icon" />
      </button>
      <button className="icon-button">
        <AiOutlineMinus className="icon" />
      </button>

      {/* Combining Multiple Icon Sets */}
      <h2>Combining Multiple Icon Sets</h2>
      <GiHamburgerMenu className="combined-icon" />
      <GiPizzaSlice className="combined-icon" />
    </div>
  );
}

export default App;
