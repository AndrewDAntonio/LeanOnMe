import React from 'react'
import LendTask from './LendTask.js'



class LendTaskContainer extends React.Component {

    

    

    render() {

        let tasksArray = this.props.tasks

        let routerHistory = this.props.history

        let filteredTasks = tasksArray.filter(task => {
            
            if (task.task_doer === null) {
                return(task)

            }
         })

        let renderTasks = filteredTasks.map(task => {
            return <LendTask 
                key={task.id}
                task={task}
                routerHistory = {routerHistory}
                handleAcceptTask = {this.props.handleAcceptTask}
            />
        })

        
        
        return(
            <>
                
                <ul className= "lendtask">
                    {renderTasks}
                </ul>
                
            </>
        )
    }
}

export default LendTaskContainer;