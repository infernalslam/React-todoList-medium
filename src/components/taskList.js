import React, { Component} from 'react'
import Tasks from './tasks.js'

class TaskList extends Component {
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
            />)
        })}
      </div>
    )
  }
}

export default TaskList
