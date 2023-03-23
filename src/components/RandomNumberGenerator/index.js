import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {counter: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerateRandomNum = () => {
    const randomNumber = this.getRandomNumber()
    console.log(randomNumber)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {counter} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="header">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-btn"
            type="button"
            onClick={this.onGenerateRandomNum}
          >
            Generate
          </button>
          <p className="random-number">{counter}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
