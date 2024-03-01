import React from 'react'

import '../assets/styles/btnStyle.css';

function SampleButton(props) {
  return (
    <div className="sampleButton">
        <a href={props.link}><button className="sampleBtn">{props.text}</button></a>
    </div>
  )
}

export default SampleButton