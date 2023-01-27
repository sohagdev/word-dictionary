import React, { Component } from 'react'

class WordContent extends Component {
  render() {
    console.log(this.props.wordContent.word)
    return <h1>Word Content</h1>
  }
}

export default WordContent
