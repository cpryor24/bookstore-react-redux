import React from 'react';
import Item from './Item';

const CartList = props => {
  let listOfItems = props.cartItems.map( book => <Item key={book.id} book={book} />)
  return (
    <div>{listOfItems}</div>
  )
}

export default CartList
