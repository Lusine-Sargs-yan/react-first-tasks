import React from "react";
import "../App.css"

// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: {
//         value: "",
//         errorMessage: "",
//       },
//       lastName: {
//         value: "",
//         errorMessage: "",
//       },
//       email: {
//         value: "",
//         errorMessage: "",
//       },
//       phone: {
//         value: "",
//         errorMessage: "",
//       }
//     };
//   }

//   handleChange = (event) => {
//     // const target = event.target;
//     // const value = target.type === "checkbox" ? target.checked : target.value;
//     // const name = target.name;

//     // this.setState({
//     //   [name]: value
//     // });

//     this.setState({
//       ...this.state,
//       [event.target.name]: {
//         ...this.state[event.target.name],
//         value: event.target.value
//       }
//     })
//   }

//   handleSubmit = () => {
//     //event.preventDefault();

//     // if(this.state.firstName[0] !== this.state.firstName[0].toUpperCase()) {
//     //   const error = 'please, your name fisrt letter should be capital letter'
//     //   this.setState({
//     //     firtNameErrorMessage: error
//     //   })
//     // } else {
//     //   return this.namePattern
//     // }

//     // if (this.validateEveryInput()) {
//     //   console.log(this.state, 'this state:::::');

//     //   let input = {};
//     //   input.firstName = '';
//     //   input.lastName = '';
//     //   input.email = '';
//     //   input.phone = '';

//     //   alert('Your input submited');
//     // }

//     Object.entries(this.state).forEach(([key, userInfo]) => {
//       if(userInfo.value.trim() === '') {
//         this.setState((prevState) => ({
//           ...prevState,
//           [key]: {
//             ...prevState[key],
//             errorMessage: 'please enter correct input'
//           }
//         }));
//       } else {
//         this.setState((prevState) => ({
//           ...prevState,
//           [key]: {
//             ...prevState[key],
//             errorMessage: ''
//           }
//         }));
//       }

//     });
//   }
//   namePattern = (value = '') => {
//     if(!value) {
//       return this.state.value;
//     } else {
//       const [first, ...rest] = value.split("");
//       return `${first.toUpperCase()}${rest.join("")}`;
//     }
//   }

//   // validateEveryInput(){
//   //   let input = this.state.input;
//   //   let errorMessage = {};
//   //   let isValid = true;

//   //   if(!input.firstName) {
//   //     isValid = false;
//   //     errorMessage.firstName = 'Please enter your first name';
//   //   }

//   //   if(typeof input.firstName !== undefined ) {

//   //     const namePattern = (value = '') => {
//   //       const [first, ...rest] = value.split("");
//   //       return `${first.toUpperCase()}${rest.join("")}`;
//   //     }
//   //     if(!namePattern()) {
//   //       isValid = false;
//   //       input.firstName = 'Please, your first name should begin with capital letter';
//   //     }

//   //   }

//   //   this.setState({
//   //     errorMessage: errorMessage
//   //   });

//   //   return isValid;
//   // }

//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         <div>
//          <label>First name </label>
//           <input 
//           type="text"
//           name="firstName"
//           value={this.state.firstName.value}
//           onChange={this.handleChange}
//           />
//           {this.state.firstName.errorMessage && <div>{this.state.firstName.errorMessage}</div>}
//         </div>
//         <div>
//          <label>Last name </label>
//           <input 
//           type="text"
//           name="lastName"
//           value={this.state.lastName.value}
//           onChange={this.handleChange}
//           />
//           {this.state.lastName.errorMessage && <div>{this.state.lastName.errorMessage}</div>}
//         </div>
//         <div>
//          <label>Email </label>
//           <input 
//           type="email"
//           name="email"
//           value={this.state.email.value}
//           onChange={this.handleChange}
//           />
//           {this.state.email.errorMessage && <div>{this.state.email.errorMessage}</div>}
//         </div>
//         <div>
//          <label>Phone </label>
//           <input 
//           type="text"
//           name="phone"
//           value={this.state.phone.value}
//           onChange={this.handleChange}
//           />
//           {this.state.phone.errorMessage && <div>{this.state.phone.errorMessage}</div>}
//         </div>
//         <button coClick={this.handleSubmit}>Log in</button>
//       </div>
//     )
//   }
// }

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
