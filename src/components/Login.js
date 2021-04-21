import React from "react";
import "../App.css";
//import {Errors} from './Errors'

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

// the second way solution
// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       errorMessage: {email: '', password: '', firstName: '', lastName: ''},
//       isName: false,
//       isLastName: false,
//       isEmail: false,
//       isPhone: false,
//       formValid: false,
//     };
//   }

//   handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;

//     this.setState({[name]:  value}, () => {
//       this.everyValidateField(name, value)
//     });
//   }
//   everyValidateField(name, value) {
//     let errorField = this.state.errorMessage;
//     let validName = this.state.isName;
//     let validLastName = this.state.isLastName;
//     let validEmail = this.state.isEmail;
//     let validPhone = this.state.isPhone;
//     if(name === 'firstName' ){
//       validName = value.match(/^[a-zA-Z]+$/);
//       errorField.firstName = validName ? '' : 'Please, your first name should be started a capital letter ';

//     } else if (name === 'lastName') {
//       validLastName = value.match(/^[a-zA-Z]+$/);
//       errorField.lastName = validLastName ? '' : 'Please, your last name should be started a capital letter ';

//     } else if(name === 'email') {
//       validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//       errorField.email = validEmail ? '' : 'Please, your email is invalid';

//     } else if(name === 'phone') {
//       validPhone = value.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
//       errorField.phone = validPhone ? '' : 'please, enter correct phone number';
//     }

//     this.setState({
//       errorMessage: errorField,
//       isName: validName,
//       isLastName: validLastName,
//       isEmail: validEmail,
//       isPhone: validPhone

//     }, this.formValidate);

//   }

//   formValidate() {
//     this.setState({formValid: this.state.isName && this.state.isLastName && this.state.isEmail && this.state.isPhone});
//   }

//   render() {
//     return (
//       <form>
//         <div className="error-message">
//           <Errors errorMessage={this.state.errorMessage} />
//         </div>
//         <div>
//           <label> First name
//             <input
//             type="text"
//             name="firstName"
//             value={this.state.firstName}
//             onChange={this.handleChange} 
//             />

//           </label>
//         </div>
//         <div>
//           <label> Last name
//             <input
//             type="text"
//             name="lastName"
//             value={this.state.lastName}
//             onChange={this.handleChange} 
//             />

//           </label>
//         </div>
//         <div>
//           <label> Email
//             <input
//             type="email"
//             name="email"
//             value={this.state.email}
//             onChange={this.handleChange} 
//             />

//           </label>
//         </div>
//         <div>
//           <label> Phone number
//             <input
//             type="text"
//             name="phone"
//             value={this.state.phone}
//             onChange={this.handleChange} 
//             />

//           </label>
//         </div>
//         <button type="submit" disabled={!this.state.formValid}>Sign up</button>
//       </form>
//     )
//   }

// }

export default Login;
