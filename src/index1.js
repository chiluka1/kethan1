import React from "react";
import './App.css';
import UserDetails from './components/UserDetails'
function App(props) {
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
      <div>
        <UserDetails head = {"heading 1"}/>
        <UserDetails head = {"heading 2"}/>
        <UserDetails head = {"heading 3"}/>
        <UserDetails head = {"heading 4"}/>
        <UserDetails head = {"heading 5"}/>
        <UserDetails head = {"heading 6"}/>
      </div>
  )}

export default App;
