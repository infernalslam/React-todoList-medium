import React, { Component } from 'react'
import './App.css'
import TaskList from './components/taskList.js'
import Date from './components/date.js'
import Avatar from './components/avatar.js'
import Button from './components/button.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      tasks: [
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '8',
          period: 'AM',
          title: 'Meeting Startup',
          description: '#Reactjs working'
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '10',
          period: 'PM',
          title: 'Meeting learn Angular',
          description: '#Angular working'
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '9',
          period: 'AM',
          title: 'Meeting learn Vue.js',
          description: '#Vue.js working'
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          time: '4',
          period: 'PM',
          title: 'Meeting learn Javascript',
          description: '#Javascript working'
        }
      ]
    }
  }
  render () {
    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar />
        <Date /> <br />
        <TaskList tasks={this.state.tasks} />
        <Button />
      </div>
    )
  }
}

export default App
