import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    diceResult: 0,
  }

  rollDice = (e) => {
    const result = Math.round(Math.random() * 6)
    console.log('Rolling dice', result)
    this.setState({
      diceResult: result,
    })
  }

  render() {
    return (
      <>
        <div class="d6">
          <h1>{this.state.diceResult}</h1>
          <button onClick={this.rollDice}>Roll D6</button>
        </div>
      </>
    )
  }
}

export default App
