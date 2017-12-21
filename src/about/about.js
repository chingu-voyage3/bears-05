import React from 'react'
import { TextInput, TextArea }  from '../formElements'

const About_page = (props) => {

  let emailProps = props.props.email
  let nameProps = props.props.name

  return(
    <div className="content">
      <TextInput props={nameProps}/>
      <TextInput props={emailProps}/>
      <TextArea/>
    </div>
  )
}

export default About_page