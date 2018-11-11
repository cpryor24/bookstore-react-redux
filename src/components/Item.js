import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/books.actions'

const Item = props => {

  let handleClick = id => {
    props.removeFromCart(id)
  }

  return (
    <div>
      <p>{props.book.title} ${props.book.price.toFixed(2)} <button onClick={() => handleClick(props.book.id)}>Remove</button></p>
    </div>
  )
}

export default connect(null, { removeFromCart })(Item)
