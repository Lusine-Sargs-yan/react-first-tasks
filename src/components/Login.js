import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "", 
      lastName: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.firstName);
    alert("A name was submitted: " + this.state.lastName);
    alert("A name was submitted: " + this.state.email);
    alert("A name was submitted: " + this.state.password);
    event.preventDefault();
  };

  // @TODO: move to helpers
  uppercase = (value = "") => {
    if (!value) {
      return this.state.value;
    }
    const [first, ...rest] = value.split("");
    return `${first.toUpperCase()}${rest.join("")}`;
  };
  emailValidation = (value = "") => {
    if (!value) {
      return this.state.value;
    }
    if (!value.includes("@")) {
      return "error message";
    }
  };
  passwordValidation = (value = "") => {
    if(!value) {
      return this.state.value;
    }
    if(value.length >= 8 ) {
      return "error message"
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First name </label>
        <input
          type="text"
          name="firstName"
          value={this.uppercase(this.state.firstName)}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label>Last name </label>
        <input
          type="text"
          name="lastName"
          value={this.uppercase(this.state.lastName)}
          onChange={this.handleChange}
        />

        <br />
        <br />
        <label>Email </label>
        <input
          type="email"
          name="email"
          value={this.emailValidation(this.state.email)}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label>Phone number </label>
        <input
          type="password"
          name="phone"
          value={this.passwordValidation(this.state.password)}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;