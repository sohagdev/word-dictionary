import React, { useState } from 'react'
import { GiBlackBook } from 'react-icons/gi'
import { BsToggleOff, BsToggleOn, BsMoonFill, BsMoon } from 'react-icons/bs'

const Navbar = ({ isDarkMode, handleClick }) => {
  return (
    <div className='navbar flex justify-between container py-5 px-5'>
      <a href='/'>
        <GiBlackBook
          size={60}
          className={`${isDarkMode ? 'text-black' : ' text-white'} `}
        />
      </a>
      <div className='flex justify-center align-center my-2'>
        <form className='flex-auto'>
          <select
            name='option'
            id='option'
            className={`${
              isDarkMode
                ? 'bg-gray-50 border-gray-300 text-gray-900'
                : 'bg-gray-600 border-gray-800 text-white'
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          >
            <option value='serif'>Serif</option>
            <option value='sans serif'>Sans Serif</option>
            <option value='monospace '>Monospace</option>
          </select>
        </form>
        <button onClick={handleClick} className='flex-auto mx-5' type='button'>
          {isDarkMode ? (
            <BsToggleOff size={32} className=' text-black' />
          ) : (
            <BsToggleOn size={32} className='text-white' />
          )}
        </button>
        <button className='flex-auto '>
          {isDarkMode ? (
            <BsMoonFill size={32} className=' text-black' />
          ) : (
            <BsMoon size={32} className='text-white ' />
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar
