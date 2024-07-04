import React, { createContext, useContext, useState } from 'react'
import { InputContext } from '../utils/inputContext';
import { Link, Routes, Route } from 'react-router-dom';




function Navbar() {
  const { inputValue, setInputValue } = useContext(InputContext);
  const handleChange = (event) => {
    setInputValue(event.target.value);
    // console.log(event.target.value);
    console.log(inputValue);
  };

  return (
    <div className='p-3'>
      <nav className='h-50 bg-red-50 p-2 flex justify-between'>
    <div>
      <i className="ri-search-line mr-1" ></i>
        <input 
          type='text'
          placeholder='Book Name' 
          className='border rounded-md'
          name='bookName'
          value={inputValue} 
          onChange={handleChange}
      >
        </input>
    </div>
        <Link to='./Shelf'
          className='bg-green-500 p-1 pl-3 pr-3 rounded-xl text-white hover:scale-110'>
        My Bookshelf
        </Link>
        
        
      </nav>      
    </div>
  )

}

export default Navbar