import React from 'react'

const Helmet = (props) => {
    document.title="Mjmart -" + props.title;
  return<div className='w-100'>{props.children}</div>
  
}

export default Helmet
