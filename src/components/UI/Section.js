import React from 'react'

function Section(props) {
  return (

    <section className={`section ${props.class ? props.class : ''}`}>
        {props.children}
    </section>
    
  )
}

export default Section