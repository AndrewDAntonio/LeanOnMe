import React from 'react'
import { Link } from 'react-router-dom'


class CreatedTask extends React.Component {

    

    render() {

        const {id, description} = this.props.task
        const {profile_pic, state, city, username} = this.props.task.task_creator
        

        return(
            
            <>
           
           <Link to={`/tasks/${id}`}>
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
                    <button className="buttonTask" >View Progress</button>
            </li>
            </Link>    
            </>
            
        )
    }
}

export default CreatedTask;