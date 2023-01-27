import { Component } from 'react'
import Navbar from './components/Navbar'
import SearchWord from './components/SearchWord'
import WordContent from './components/WordContent'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: 'dictionary',
      searchedWord: null,
      error: null
    }
  }
  componentDidMount() {
    this.fetchWord()
  }

  fetchWord() {
    const endpoint = `https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.term}`
    const headers = new Headers({
      Authorization: 'Bearer YOUR_API_KEY'
    })
    // fetch(endpoint, headers)
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ searchedWord: data }))
    //   .catch((error) => {
    //     this.setState({ error })
    //   })
  }

  componentDidUpdate(prevState) {
    if (prevState.term !== this.state.term) {
      this.fetchWord()
    }
  }

  onSearchedWord = (text) => {
    this.setState(() => {
      return { term: text }
    })
  }
  render() {
    return (
      <main className='App'>
        <div className='container mx-auto'>
          <Navbar />
          <SearchWord onChangeHandler={this.onSearchedWord} />
          <WordContent wordDetails={this.state.searchedWord} />
        </div>
      </main>
    )
  }
}

export default App
