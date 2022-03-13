import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app-router";
import Badge from "./components/Badge";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <div className="App">
        Hello React!, I am coming
        <Badge color="primary">10</Badge>
        <Badge color="secondary"></Badge>
        <Badge color="warning"></Badge>
        <Badge color="error"></Badge>
        <Badge color="success"></Badge>
        <Badge color="info"></Badge>
        <div />
        <Button color="primary">Test Button</Button>
        <Button color="secondary">Test Button</Button>
        <Button color="warning">Test Button</Button>
        <Button color="error">Test Button</Button>
        <Button color="success">Test Button</Button>
        <Button color="info">Test Button</Button>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
