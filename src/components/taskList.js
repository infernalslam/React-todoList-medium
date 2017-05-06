import React, { Component} from 'react'
import Tasks from './tasks.js'

class TaskList extends Component {
  constructor (props) {
    super(props)
    this.delTask = this.props.delTask.bind(this)
  }
  render () {
    return (
      <div>
        { this.props.tasks.map((item, index) => {
          return (<Tasks
            key={index}
            id={item.id}
            time={item.time}
            period={item.period}
            title={item.title}
            description={item.description}
            delTask={this.delTask}
            />)
        })}
      </div>
    )
  }
}

export default TaskList
