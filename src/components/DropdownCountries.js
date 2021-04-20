import React from "react";


class DropdownCountries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((r) => r.json())
      .then((data) => {
        this.setState({
          data
        });
      })
  }

  handleSearchUpdate = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleSearch = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${this.state.searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'gggg')
        this.setState({
          data
        });

      })
  };

  render() {
    console.log(this.state.data);
    const {name, flag} = this.state.data;
    console.log(name, "sss")
    console.log(this.state.data.name, "name::");
    
    return (
      <div>
        <h2>Countries</h2>

        <input
          value={this.state.searchValue}
          onChange={(event) => {this.handleSearchUpdate(event)}}
          placeholder="Search Country"
          onClick={this.handleSearch}
        />
        <ul>
          {this.state.data.map(({name, flag}) => (
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