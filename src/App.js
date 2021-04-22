import React from "react";
import Counter from "./components/Counter";
import Login from "./components/Login";
import DropdownCountries from "./components/DropdownCountries";
import Posts from "./components/Posts";

function App() {
  return (
    <div >
      <Counter/>
      <br />
      <br />
      <br />
      <br />
      <Login />
      <br />
      <br />
      {/* <Posts /> */}
      <br />
      <br />
      <br />
      <br />
      <DropdownCountries />
    </div>
  );
}

export default App;
