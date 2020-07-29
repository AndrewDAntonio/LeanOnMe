import React from 'react'



class ProgressTask extends React.Component {

    

    render() {

        const {id, description} = this.props.task
        const {profile_pic, state, city, username} = this.props.task.task_creator
        

        return(
            
            <>
           
           
           <li className= "lendtask">
                    <div>
                        <img src={profile_pic} alt="Profile Pic" width= "50" height = "50"></img>
                        
                    </div>
                    <div className= "usertask">
                        <div className= "userTaskBlock">
                            {username}
                        </div>
                        <div className= "userTaskBlock">
                            {city}, {state}
                        </div>
                    </div>
                    <div className= "notUserTask">{description}</div>
                    <button className="buttonTask" onClick= {() =>this.props.handleCompleteTask(id, this.props.task)}>Complete Task</button>
            </li>
              
            </>
            
        )
    }
}

export default ProgressTask;