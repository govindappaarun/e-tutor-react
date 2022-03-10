import React from "react";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      Hello React!, I am coming
      <Button className="primary">Hello World</Button>
      <Button className="secondary">Hello World</Button>
      <Button className="warning">Hello World</Button>
      <Button className="error">Hello World</Button>
      <Navbar />
    </div>
  );
}

export default App;
