import React from "react";

class DropdownCountries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: '',
      data: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });

    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data,
          loading: false
        });
      })
      .catch((err) => {
        this.setState({error: err.message, loading: false})
      });
  }

  handleSearchUpdate = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    console.log(this.state.data.map(({name}) => name), "name:::");

    if(this.state.loading === true) {
      return (
        <div>
          <p>Loading ...</p>
        </div>
      )
    }

    if(this.state.error !== '') {
      return (
        <div>
          <p>{this.state.error}</p>
        </div>
      )
    }

    // Փնտրման գործընթացը իրականցրել եմ միայն առաջին տառի համընկման ժամանակ
    const filteredNames = !this.state.searchValue ? this.state.data.map(({name}) => name) 
    : this.state.data.filter(({name}) => name[0] === this.state.searchValue);

    console.log(filteredNames, "filter:::")
    
    return (
      <div>
        <h2>Countries</h2>
        <input
          value={this.state.searchValue}
          onChange={(event) => {this.handleSearchUpdate(event)}}
          placeholder="Search Country"
        />
          <ul>
          {Object.values(filteredNames).map(({name, flag}) => (
            <div key={name}>
              <img width="25" alt={name} src={flag} /> {name} 
            </div>
          ))}

        </ul>
      </div>
    );
  }
  

}

export default DropdownCountries;