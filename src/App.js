import { Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      term: 'hello',
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

  render() {
    return (
      <main className='App'>
        <div className='container mx-auto'>
          <Navbar />
        </div>
      </main>
    )
  }
}

export default App
