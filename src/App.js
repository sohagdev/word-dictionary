import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import WordContent from './components/WordContent'
import axios from 'axios'
import './App.css'

const App = () => {
  const [term, setTerm] = useState('dictionary')
  const [searchedWord, setSearchedWord] = useState([])
  const [errors, setErrors] = useState(null)
  const [hasError, setHasError] = useState(false)

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

  return (
    <main className='App dark:bg-gray-900 h-screen bg-white dark:text-slate-300 text-black'>
      <div className='container mx-auto'>
        <Navbar />
        <SearchBar onChangeHandler={onSearchedWord} />
        <WordContent wordDetails={searchedWord} />
      </div>
    </main>
  )
}

export default App
