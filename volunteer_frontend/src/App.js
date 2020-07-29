import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import { API_URL } from './constants/index.js'
import Header from './components/Header.js'
import LoginForm from './components/LoginForm.js'
import SignupForm from './components/SignupForm.js'
import LendTaskContainer from './components/LendTaskContainer.js'
import ProfilePage from './components/ProfilePage.js'
import CreateTaskForm from './components/CreateTaskForm.js'
import TaskPage from './components/TaskPage.js'

class App extends React.Component {

  state = {
    currentUser: null,
    tasks: [],
    classifications: []
    
  }

  handleUpdateCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }

  componentDidMount() {
    this.getAutologin()
    this.getTasks()
    this.getClassifications()
    
  }

  getAutologin() {
    fetch(API_URL + "/autologin", {
      credentials: "include"
    })
      .then(r => {
        if (!r.ok) {
          throw r
        }
        return r.json()
      })
      .then(user => this.setState({ currentUser: user }))
      .catch(console.error)
  }

  getTasks() {
    fetch(API_URL +"/tasks")
        .then(r => r.json())
        .then(tasksArray => {
            this.setState({
                tasks: tasksArray
            })
        })
  }

  getClassifications() {
    fetch(API_URL +"/classifications")
        .then(r => r.json())
        .then(classificationsArray => {
            this.setState({
                classifications: classificationsArray
            })
        })
  }

  handleAcceptTask = (id, task) => {
        

    fetch(API_URL + `/tasks/`+ id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json" 
        },
        credentials: "include",
        body: JSON.stringify(task)
    })
    .then(r => r.json())
    .then((updatedTask) => {
        this.props.history.push("/profile")
        this.getTasks()
        
    })
}

handleCompleteTask = (id, task) => {
        

  fetch(API_URL + `/tasks/`+ id, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json" 
      },
      credentials: "include",
      body: JSON.stringify(task)
  })
  .then(r => r.json())
  .then(() => {
      this.getTasks()
      
  })
}
  
  render() {
    
    
  return (
    <>
      <Header currentUser={this.state.currentUser} handleUpdateCurrentUser={this.handleUpdateCurrentUser}/>
      <main>
        <Switch>
          <Route exact path='/login' render={(routeProps) => <LoginForm handleUpdateCurrentUser={this.handleUpdateCurrentUser} {...routeProps} />} />
          <Route exact path='/signup' render={(routeProps) => <SignupForm handleUpdateCurrentUser={this.handleUpdateCurrentUser} {...routeProps} />} />
          <Route exact path='/' render={(routeProps) => <LendTaskContainer tasks={this.state.tasks} handleAcceptTask ={this.handleAcceptTask} {...routeProps} />} />
          <Route exact path='/profile' render={(routeProps) => <ProfilePage currentUser= {this.state.currentUser} tasks={this.state.tasks} handleCompleteTask={this.handleCompleteTask} {...routeProps} />} />
          <Route exact path='/createtask' render={(routeProps) => <CreateTaskForm getTasks= {() => {this.getTasks()}} currentUser= {this.state.currentUser} classifications= {this.state.classifications} {...routeProps} />} />
          <Route exact path='/tasks/:id' render={(routeProps) => <TaskPage   {...routeProps} />} />    
        </Switch>
      </main>
    </>
  )
  }
}

export default withRouter(App);
