import React from 'react'
import LoadingSpinner from './LoadingSpinner'

class TaskPage extends React.Component {

    state = {
        task: null,
        loaded: false
    }

    componentDidMount() {
        fetch(`http://localhost:3000/tasks/${this.props.match.params.id}`)
      .then(r => r.json())
      .then(task => {
        this.setState({
          task: task,
          loaded: true
          
        })
        console.log(this.state)
      })
    }

    buttonDisplay(task) {
      if (task.task_doer === null) {
        return <button className="buttonLogo" >Accept Task</button>
      }
    }

    render() {
        console.log(this.props)
        if (!this.state.loaded) {
            return <LoadingSpinner />
        }

        const task = this.state.task
        const {description, task_creator} = task
        

        return(
          <>
            <h1>{task_creator.username} Needs a Hand</h1>
            <div>{description}</div>
            <div>
            {this.buttonDisplay(task)}
            </div>
          </>
        )
    }
}

export default TaskPage;