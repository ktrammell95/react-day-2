import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h3>The current time is</h3>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock
