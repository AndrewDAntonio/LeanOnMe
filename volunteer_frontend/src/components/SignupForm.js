import React from 'react'

class SignupForm extends React.Component {
  state = {
    username: "",
    password: "",
    password_confirmation: "",
    state: "",
    city: ""
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.password === this.state.password_confirmation) {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(this.state)
      })
      .then(r => r.json())
      .then(user => {
        this.props.handleUpdateCurrentUser(user)
        this.props.history.push("/")
      })
    }
    else {
      alert("Please make sure your Password and Confirmation match")
    }

  }
    render() {
      const { username, password, password_confirmation, state, city } = this.state
      return (
        <div className="form-container">
        <h3>Sign up for an account</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleInputChange} value={username} />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleInputChange} value={password} />
          <label>Confirm Password:</label>
          <input type="password" name="password_confirmation" onChange={this.handleInputChange} value={password_confirmation} />
          <label>State:</label>
          <input type="text" name="state" onChange={this.handleInputChange} value={state} />
          <label>City:</label>
          <input type="text" name="city" onChange={this.handleInputChange} value={city} />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
      )
    }
}

export default SignupForm;