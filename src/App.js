import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import WordContent from './components/WordContent'
import './App.css'

const App = () => {
  const [term, setTerm] = useState('dictionary')
  const [searchedWord, setSearchedWord] = useState([])
  const [errors, setErrors] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    fetchWord()
  }, [term])

  const fetchWord = () => {
    const options = {
      method: 'GET',
      url: `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
    }

    axios
      .request(options)
      .then(function (response) {
        setSearchedWord(response.data[0])
        console.log(response.data[0])
      })
      .catch(function (error) {
        setErrors(error)
        console.error(errors)
      })
  }
  const onSearchedWord = (text) => {
    setTerm(text)
  }
  const handleClick = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <main
      className={`App h-screen  ${
        isDarkMode
          ? 'bg-white text-slate-700'
          : 'dark:bg-gray-900 dark:text-slate-300 '
      }`}
    >
      <div className='container mx-auto'>
        <Navbar isDarkMode={isDarkMode} handleClick={handleClick} />
        <SearchBar isDarkMode={isDarkMode} onChangeHandler={onSearchedWord} />
        <WordContent wordDetails={searchedWord} />
      </div>
    </main>
  )
}

export default App
