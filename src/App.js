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
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [fontFamily, setFontFamily] = useState('serif')
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
  const handleChange = (e) => {
    setFontFamily(e.target.value)
  }
  return (
    <main
      className={`App block ${
        isDarkMode
          ? 'bg-white text-slate-900 h-full'
          : 'bg-gray-900 text-slate-300 h-full lg:h-screen'
      }`}
      style={{ fontFamily }}
    >
      <div className='container mx-auto'>
        <Navbar
          isDarkMode={isDarkMode}
          handleClick={handleClick}
          fontFamily={fontFamily}
          handleChange={handleChange}
        />
        <SearchBar isDarkMode={isDarkMode} onChangeHandler={onSearchedWord} />
        <WordContent wordDetails={searchedWord} />
      </div>
    </main>
  )
}

export default App
