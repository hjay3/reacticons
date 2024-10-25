import React, { useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import './App.css';

function App() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="app">
      <h1>Dynamic Icon Color with CSS</h1>
      <MdFavorite className={isFavorite ? 'icon-favorite' : 'icon-default'} />
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        style={{ marginTop: '20px' }}
      >
        Toggle Favorite
      </button>
    </div>
  );
}

export default App;
