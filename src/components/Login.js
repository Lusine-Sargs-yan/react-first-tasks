import React from "react";
import "../App.css"

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: { 
        value: '',
        firstNameErrorMessage: ''
      },
      lastName: { 
        value: '',
        lastNameErrorMessage: ''
      },
      email: {
        value: '',
        emailErrorMessage: ''
      },
      phone: {
        value: '',
        phoneErrorMessage: ''
      }
    };
  }

  handleChange = (event) => {
    // if (evt.target.name === 'name') {
    //   setName(evt.target.value)
    // } else if (evt.target.name === 'surname') {
    //   setSurname(evt.target.value)
    // }
    this.setState({
      ...this.state,
      [event.target.name]: {
        ...this.state[event.target.name],
        value: event.target.value
      }
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    Object.entries(this.state).forEach(([key, info]) => {
      if (info.value.trim() === '') {
        this.setState((prevState) => ({
          ...prevState,
          [key]: {
            ...prevState[key],
            firstNameErrorMessage: 'First name is required',
            lastNameErrorMessage: 'Last name is required',
            emailErrorMessage: 'Email is required',
            phoneErrorMessage: 'Phone number is required'
          }
        }))
      } else {
        this.setState((prevState) => ({
          ...prevState,
          [key]: {
            ...prevState[key],
            firstNameErrorMessage: '',
            lastNameErrorMessage: ''
          }
        }))
      }
    });
  }
  validateName = (value = '') => {
    //const alphabetRegex =  /^[a-zA-Z]+$/;
    //return  alphabetRegex.test(String(value));
    if(!value) { 
      return value;
    } else {
      const [first, ...rest] = value.split("");
      return `${first.toUpperCase()}${rest.join("")}`
    }
  }

  validateEmail = (value = "") => {
    if (!value) {
      return this.state.value;
    }
    if (!value.includes("@")) {
      alert('please, enter correct email');
    }
  }

  validatePhone = (value = '') => {
    if(!value) {
      return this.state.value;
    } else {
      const normalizedValue = value
      .split('')
      .reduce((acc, el, index) => {
        if ((index + 1) % 4 === 0 && el !== '') {
          return `${acc} ${el}`;
        }
  
        return `${acc}${el}`;
      }, "");
      
      return  normalizedValue;
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <label>First Name
            <input
            type="text" 
            name="firstName" 
            onChange={this.handleChange}
            value={this.validateName(this.state.firstName.value)}  />
            {this.state.firstName.firstNameErrorMessage && 
            <div className="error-message">{this.state.firstName.firstNameErrorMessage}</div>}
          </label>
        </div>
        <br />
        <br />
        <div>
          <label>Last name
            <input 
            type="text"
            name="lastName"
            onChange={this.handleChange} 
            value={this.validateName(this.state.lastName.value)}/>
            {this.state.lastName.lastNameErrorMessage && 
            <div className="error-message">{this.state.lastName.lastNameErrorMessage}</div>}
          </label>
        </div>
        <br/>
        <div>
          <label>Email
            <input 
            type="email"
            name="email"
            onChange={this.handleChange} 
            value={this.validateEmail(this.state.email.value)}/>
            {this.state.email.emailErrorMessage && 
            <div className="error-message">{this.state.email.emailErrorMessage}</div>}
          </label>
        </div>
        <br/>
        <div>
          <label>Phone number
            <input 
            type="text"
            name="phone"
            onChange={this.handleChange} 
            value={this.validatePhone(this.state.phone.value)}/>
            {this.state.phone.phoneErrorMessage && 
            <div className="error-message">{this.state.phone.phoneErrorMessage}</div>}
          </label>
        </div>
        <br />
        <br />
        <button onClick={this.handleSubmit}>Log In</button>
      </div>
    )

  }
}

export default Login;
