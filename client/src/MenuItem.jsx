import React from 'react'

const MenuItem = ({ name, description, price }) => {
  return (
<div className="menu-item">
    <h3>{name}</h3>
    <p>{description}</p>
    <span>{price}</span>
  </div>
  )
}

export default MenuItem