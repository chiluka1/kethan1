import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "kethan";
  var num = "123456789";
  return (
    <div className="App"> 
      <h1>heading!!!!!</h1>
      <p>{name}</p>
      <p>{num}</p>
      { "  " ? <h1> {name}</h1> : <h1>no number</h1>};
    </div>
      
  );
}

export default App;
