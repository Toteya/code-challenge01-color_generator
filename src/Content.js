import React from 'react';
import './Content.css';
import SearchColor from './SearchColor';
import { useState } from 'react';

const Content = () => {
  const [color, setColor] = useState('');

  const onChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    changeColor(newColor);
  }

  const changeColor = (newColor) => {
    document.querySelector('.colorBox').style.backgroundColor = newColor;
  }


  return (
    <main className='Content'>
      <div className='colorBox'>
      </div>
      <SearchColor
        color={color}
        onChange={onChange}
      />
    </main>
  )
}

export default Content