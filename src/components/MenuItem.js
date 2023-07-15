import React from 'react'

function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'>
        <div className='menuItemImage' style={{backgroundImage: `url(${image})`}}></div>
        <div className='menuItemBlock'>
          <h1>{name}</h1>
          <p>${price}</p>          
        </div>

    </div>
  )
}

export default MenuItem