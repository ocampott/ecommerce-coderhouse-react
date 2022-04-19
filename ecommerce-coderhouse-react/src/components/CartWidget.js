import React from 'react'
import Cart from '../assets/cart.png'

export const CartWidget = () => {
  return (
    <div>
        <img src={Cart} alt="Cart img" style={{width: '30px', height: '30px'}}/>
    </div>
  )
}
