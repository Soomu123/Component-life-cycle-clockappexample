import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showclock: false}

  onToggleClock = () => {
    this.setState(prevState => ({showclock: !prevState.showclock}))
  }

  render() {
    const {showclock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {showclock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showclock && <Clock />}
      </div>
    )
  }
}

export default App
