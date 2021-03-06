import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }
  componentDidMount () {
    this.setState(this.state)
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
   
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(this.state)
      })
      .then(r => {
        if (!r.ok) {
          throw r
        }
        return r.json()
      })
      .then(user => {
        this.props.handleUpdateCurrentUser(user)
        this.props.history.push("/profile")})
  }
  
    render() {
      const { username, password } = this.state

      return (
        <div className="form-container">
        
        <h3>Login to your account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleInputChange} value={username} />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleInputChange} value={password} />
          <input type="submit" value="Login" />
        </form>
        <Link to={`/signup`}>
          <button className="buttonHeader">Don't have an Account? Click here to Signup!</button>
        </Link>
      </div>
      )
    }
}

export default LoginForm;