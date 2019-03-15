import React, { Component } from 'react'
import './App.css'
import Person from './components/Person'
import Clock from './components/Clock'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // age: 53,
      course: 'React I - Intro to React'
    }
    //state is set in the higher component
  }

  changeClass = () => {
    console.log('testing this')
    this.setState({ course: 'React I' })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Person course={this.state.course} changeClass={this.changeClass} />
          <Clock />
        </header>
      </div>
    )
  }
}

export default App
