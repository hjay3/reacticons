import React, { useState } from 'react';
import ColoredIcon from './ColoredIcon';

function App() {
  const [color, setColor] = useState('green');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Dynamic Icon Color with Props</h1>
      <ColoredIcon color={color} />
      <button onClick={() => changeColor('blue')} style={{ marginTop: '20px' }}>
        Blue
      </button>
      <button
        onClick={() => changeColor('red')}
        style={{ marginTop: '20px', marginLeft: '10px' }}
      >
        Red
      </button>
    </div>
  );
}

export default App;
