import React from 'react'
import CreatedTask from './CreatedTask.js'



class CreatedTaskContainer extends React.Component {

    

    render() {

        let tasksArray = this.props.tasks

        let filteredTasks = tasksArray.filter(task => {
            
            if (task.task_creator.id === this.props.currentUser.id) {
                return(task)

            }
         })

        let routerHistory = this.props.history

        let renderTasks = filteredTasks.map(task => {
            
            return <CreatedTask
                key={task.id}
                task={task}
                routerHistory = {routerHistory}
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

export default CreatedTaskContainer;