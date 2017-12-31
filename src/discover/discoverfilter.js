import React from 'react'
import { Select } from '../formElements'

const DiscoverFilter = (props) => {

  return(
    <div className="filters">
        <Select props={props.props.year}/>
        <Select props={props.props.sortby}/>
        <Select props={props.props.genre}/>
    </div>
  )
}

export default DiscoverFilter