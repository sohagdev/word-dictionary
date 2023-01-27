import React, { Component } from 'react'
import { GiBlackBook } from 'react-icons/gi'
import { BsToggleOff, BsToggleOn, BsMoonFill, BsMoon } from 'react-icons/bs'

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar flex justify-between container py-5 px-5'>
        <a href='/'>
          <GiBlackBook size={60} />
        </a>
        <div className='flex justify-center align-center my-2'>
          <form className='flex-auto'>
            <select
              name='option'
              id='option'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'
            >
              <option value='serif'>Serif</option>
              <option value='sans serif'>Sans Serif</option>
              <option value='monospace '>Monospace</option>
            </select>
          </form>
          <button className='flex-auto mx-5' type='button'>
            <BsToggleOff size={32} />
          </button>
          <button className='flex-auto '>
            <BsMoon size={32} />
          </button>
        </div>
      </div>
    )
  }
}

export default Navbar
