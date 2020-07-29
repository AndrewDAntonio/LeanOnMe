import React from 'react'
import ProgressTask from './ProgressTask.js'



class ProgressTaskContainer extends React.Component {

    

    

    render() {

        let tasksArray = this.props.tasks

        let filteredTasks = tasksArray.filter(task => {
            
            if (task.task_doer != null) {
                if (task.status !== 3) {
                    return(task.task_doer.id === this.props.currentUser.id)
                }
                

            }
         })

        let routerHistory = this.props.history

        let renderTasks = filteredTasks.map(task => {
            
            return <ProgressTask
                key={task.id}
                task={task}
                routerHistory = {routerHistory}
                handleCompleteTask = {this.props.handleCompleteTask}
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

export default ProgressTaskContainer;