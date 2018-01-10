import React from 'react'

const Select = (props) => {  

  let attr = props.props

  let closedStyles = {
    opacity: "0",
    width: "0%",
    height: "0px"
  }

  document.addEventListener('click', function(e) {
    let clickedElement = e.target
    let allSelects = document.getElementsByClassName("select")
    for(let i=0; i<allSelects.length; i++) {
      if(!allSelects[i].contains(clickedElement)) {
        Object.assign(allSelects[i].lastChild.style, closedStyles)
      }
    }
  })

  let openClose = (event) => {
    let heightOfList = 36 * attr.options.length + "px"
    let openStyles = {
      opacity: "1",
      width: "100%",
      height: heightOfList
    }
    Object.assign(event.target.parentElement.lastChild.style, openStyles)
  }

  let optionClick = (event) => {
    Object.assign(event.target.parentElement.style, closedStyles)
  }

  let options = attr.options.map((option, i) => {
    return(
      <li onClick={(e) => {attr.method(e, attr.values[i]); optionClick(e)}} key={i}>{option}</li>
    )
  })  

  return(
    <div className="select">
      <label onClick={(e) => {openClose(e)}}>
        {
        attr.label
        }
      </label>
      <ul>
        {options}
      </ul>
    </div>
  )
}

export default Select