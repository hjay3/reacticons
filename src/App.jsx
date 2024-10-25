import React, { useState } from 'react';
import { FaBeer, FaCoffee } from 'react-icons/fa';
import { MdAlarm, MdFavorite } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { GiHamburgerMenu, GiPizzaSlice } from 'react-icons/gi';
import { TiWeatherSunny, TiWeatherCloudy } from 'react-icons/ti';

function App() {
  const [isSunny, setIsSunny] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Icons Demo</h1>

      {/* Basic Usage */}
      <h2>Basic Usage</h2>
      <p>
        Let's have a <FaBeer /> and a <FaCoffee />!
      </p>

      {/* Dynamic Icon Rendering */}
      <h2>Dynamic Icon Rendering</h2>
      <button onClick={() => setIsSunny(!isSunny)}>
        {isSunny ? <TiWeatherSunny size={50} /> : <TiWeatherCloudy size={50} />}
      </button>

      {/* Custom Styling */}
      <h2>Custom Styling</h2>
      <MdAlarm style={{ color: 'red', fontSize: '50px' }} />
      <MdFavorite style={{ color: 'pink', fontSize: '50px' }} />

      {/* Interactive Icons */}
      <h2>Interactive Icons</h2>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineMinus size={30} /> : <AiOutlinePlus size={30} />}
      </button>

      {/* Combining Multiple Icon Sets */}
      <h2>Combining Multiple Icon Sets</h2>
      <GiHamburgerMenu size={40} style={{ marginRight: '10px' }} />
      <GiPizzaSlice size={40} />
    </div>
  );
}

export default App;
