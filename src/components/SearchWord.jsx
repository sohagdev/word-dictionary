import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'

class SearchWord extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  onTextSubmit = (e) => {
    e.preventDefault()
    this.props.onChangeHandler(this.state.text)
  }
  render() {
    return (
      <form
        onSubmit={this.onTextSubmit}
        className='flex items-center py-5 px-5'
      >
        <label htmlFor='simple-search' className='sr-only'>
          Search
        </label>
        <div className='relative w-full'>
          <input
            type='text'
            id='simple-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search'
            onChange={(e) => {
              this.setState(() => {
                return { text: e.target.value }
              })
            }}
          />
          <button
            type='submit'
            value='submit'
            className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
          >
            <FaSearch size={20} color='violet' />
          </button>
        </div>
      </form>
    )
  }
}

export default SearchWord
