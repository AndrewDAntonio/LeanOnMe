import React from 'react'
import { API_URL } from '../constants'


const initialState = {
    description: "",
    classification_id: "",
    state: "",
    city: ""
  }


class CreateTaskForm extends React.Component {
    state = initialState
    
    
    
  
    handleInputChange = event => {
      const inputName = event.target.name
      this.setState({
        [inputName]: event.target.value
      })
    }

    handleSubmit = event => {
      event.preventDefault()
  
      fetch(API_URL + `/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(this.state)
      })
        .then(r => r.json())
        .then(newTask => {
          this.setState(initialState)
          this.props.getTasks()
          this.props.history.push("/profile")
        })
    }

    
    
    dropdownValues(array) {
      array.map(element => <option value={element}>{element.name}</option>)
    }

    render () {
        
        let {description, classification_id, state, city}= this.state
        let classifications = this.props.classifications
        
        
        return (
            <div className="form-container">
                <h4>Ask for Help</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Description:</label>
                    <textarea name="description" onChange={this.handleInputChange} value={description} rows="10" cols="40"/>
                    <label>State:</label>
                     <textarea name="state" onChange={this.handleInputChange} value={state} />
                     <label>City:</label>
                     <textarea name="city" onChange={this.handleInputChange} value={city} />
                     <label>Task Type:</label>
                      <select name="classification_id" id="classification_id" onChange={this.handleInputChange}  value={classification_id}>
                        <option value= " " selected>Choose the classification that best describes your ask</option>
                        {classifications.map(classValue => <option key={classValue.id} value={classValue.id}>{classValue.name}</option>)}
                      </select>
                      <input type="submit" value="Submit" />
                </form>

             </div>
        )
    }

}

export default CreateTaskForm