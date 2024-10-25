import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function ColoredIcon({ color }) {
  return <AiOutlinePlus style={{ color: color, fontSize: '50px' }} />;
}

export default ColoredIcon;
