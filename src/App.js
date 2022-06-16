import React from "react"
import './App.css'
import UserDetails from './components/UserDetails'
import Children from "./components/Children"
function App(props) {
  return (
      <div>
        <UserDetails 
        data = {{
          name : "kethan",
          cls : "degree",
          course : "react",
        }}
        
        />
        <Children>
          <h1>kethan is react developer</h1>
          <p>asdohvfaposjdfvnapijb</p>
        </Children>
      </div>
  )
}

export default App;
