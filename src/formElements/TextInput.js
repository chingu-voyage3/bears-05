import React from 'react'

const TextInput = (props) => {

  let handleChange = (event) => {
    if(event.target.value === "") {
      event.target.parentElement.className = ""
    } else {
      event.target.parentElement.className = "noAnimate"
    }
  }

  let attr = props.props
  return(
    <div className="textInput">
      <label>
        <input type={attr.type} id={attr.name} name={attr.name} value={attr.value} onChange={(e) => {attr.method(e); handleChange(e)}}/>
        <span>{attr.name}</span>
      </label>
    </div>
  )
}

export default TextInput