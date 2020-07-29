import React from 'react'
import ProgressTaskContainer from './ProgressTaskContainer.js'
import CreatedTaskContainer from './CreatedTaskContainer.js'


class ProfilePage extends React.Component {


    render() {

        return (
            <>

            <h1>Lending a Hand</h1>
            <ProgressTaskContainer tasks = {this.props.tasks} currentUser ={this.props.currentUser} handleCompleteTask ={this.props.handleCompleteTask}/>
            <h1>Asking for Help</h1>
            <CreatedTaskContainer tasks = {this.props.tasks} currentUser ={this.props.currentUser} />
            </>
            
        )
    }

}

export default ProfilePage;