import React from 'react'
import PropTypes from 'prop-types'

function basics(props) {

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

basics.propTypes = {}

export default basics
