import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    state = {
        seachTerm: ""
    }

    handleLogout = () => {
        fetch("http://localhost:3000/logout", {
          method: "POST",
          credentials: "include"
        })
          .then(r => r.json())
          .then(() => {
            this.props.handleUpdateCurrentUser(null)
            
          })
      }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleUpdateSearch(this.state.searchTerm)
    }
      
    render(){

        return (
          <>
            <header>
              <Link to="/">
                <button className="buttonLogo">LeanOn.me</button>
              </Link>

                 <div className="actions">
                {this.props.currentUser ? (
            <>
                <Link to="/about_us">
                  <button className="buttonHeader">About Us</button>
                </Link>
                <button className="buttonHeader" onClick={this.handleLogout}>Logout {this.props.currentUser.username}</button>
                <Link to="/profile">
                  <button className="buttonLogo">Dashboard</button>
                </Link>
            </>
          ) : (
              <>
                <Link to="/about_us">
                  <button className="buttonHeader">About Us </button>
                </Link>
                <Link to="/login">
                  <button className="buttonHeader">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="buttonHeader">SignUp</button>
                </Link>
              </>
            )}
        </div>
      </header>
      <h1>
        <div className="actions">
          <Link to="/">
          <button className="buttonSubHeader">Lend a Hand</button>
          </Link>
          <button className="buttonSubHeader">Find a Friend</button>
          <Link to="/createtask">
          <button className="buttonSubHeader">Ask For Help</button>
          </Link>
          
        </div>
      </h1>
      <h2>
        <form className="search" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="🚧Search function in progress🚧" value={this.state.searchTerm} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
      </h2>
      </>
        )
    }
}

export default Header;