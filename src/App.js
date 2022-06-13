import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "kethan";
  var num = "123456789";
  let blueColor = false;
  let safeColor = false;
  let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 234, 46, 57,];
  let strArray = ["giri", "suresh", "srimani", "dileep", "lalith", "vamshi"]; 
  let arrObj = [
    { Name : "kethan" , Role : "analyst"},
    {Name : "giri" , Role : "associate"},
    {Name : "srimani" , Role : "engineer"},
   ];
  return (
    <div className="App"> 
      <h1 className = { blueColor ? "header" : safeColor ? "safe" : "error" }>Heading</h1>
      <p>{name}</p>
      <p>{num}</p>
      {true ? <h1> {name}</h1> : <h1>{num}</h1>}
      { arr.map[(index, value) => {
       return <h4>{value}</h4>
      }]}
      { strArray.map[(value,index) => {
        return <h1>{value}</h1>
      }]}

      { arrObj.map[(value, index) => {
        return 
        <div className = "user-item">
        <h1>Name : {value.name}</h1> 
        <h1>Name : {value.role}</h1>
        </div>
      }]}
 
    </div>
      
  );
}

export default App;
