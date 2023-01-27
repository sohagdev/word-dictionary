import { Component } from 'react'
import Navbar from './components/Navbar'
import SearchWord from './components/SearchWord'
import WordContent from './components/WordContent'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      searchedWord: []
    }
  }
  componentDidMount() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.term}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => {
          return { searchedWord: data }
        })
      })
  }
  componentDidUpdate(prevState) {
    if (prevState.term !== this.state.term) {
      this.componentDidMount()
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
          <WordContent wordContent={this.state.searchedWord} />
        </div>
      </main>
    )
  }
}

export default App
