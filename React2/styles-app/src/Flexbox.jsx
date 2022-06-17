import React from 'react'

const Flexbox = ({children, ...props}) => {
  return (
    <div {...props}>{children}</div>
  )
}

export default Flexbox