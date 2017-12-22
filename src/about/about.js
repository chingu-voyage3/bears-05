import React from 'react'
import { TextInput, TextArea, Select }  from '../formElements'

const About_page = (props) => {

  let emailProps = props.props.email
  let nameProps = props.props.name
  let selectMemberProps = props.props.selectMember

  return(
    <div className="content">
      <Select props={selectMemberProps}/>
      <TextInput props={nameProps}/>
      <TextInput props={emailProps}/>
      <TextArea/>
    </div>
  )
}

export default About_page