import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ onChangeHandler, isDarkMode }) => {
  const [text, setText] = useState('')
  const onTextSubmit = (e) => {
    e.preventDefault()
    onChangeHandler(text)
    setText('')
  }

  return (
    <form onSubmit={onTextSubmit} className='flex items-center py-5 px-5'>
      <label htmlFor='simple-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <input
          type='text'
          id='simple-search'
          className={`block w-full p-4 pl-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
            isDarkMode
              ? 'text-gray-900 border border-gray-300 bg-gray-50'
              : 'text-white border border-gray-300 bg-gray-600'
          }`}
          placeholder='Search'
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type='submit'
          value='submit'
          className='absolute inset-y-0 right-0 flex items-center pr-5 cursor-pointer'
        >
          <FaSearch size={20} className='text-violet-600' />
        </button>
      </div>
    </form>
  )
}

export default SearchBar
