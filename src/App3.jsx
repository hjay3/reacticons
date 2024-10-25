import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';

function App() {
  const [color, setColor] = useState('black');

  const toggleColor = () => {
    setColor(color === 'black' ? 'blue' : 'black');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Dynamic Icon Color</h1>
      <FaBeer style={{ color: color, fontSize: '50px' }} />
      <button onClick={toggleColor} style={{ marginTop: '20px' }}>
        Toggle Color
      </button>
    </div>
  );
}

export default App;
