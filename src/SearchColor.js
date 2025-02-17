import React from 'react';

const SearchColor = ({ color, onChange }) => {

  return (
    <input
      className='SearchColor'
      type="text"
      placeholder='Enter colour'
      value={color}
      onChange={(e) => onChange(e)}
    />
  )
}

export default SearchColor