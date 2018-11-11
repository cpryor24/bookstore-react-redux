import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, Button } from 'reactstrap';
import CartList from './CartList';

const Cart = props => {
  let booksInCart = props.books.filter( book => book.inCart)

  let totalWithoutTax = booksInCart.reduce((acc, book) => acc + book.price, 0)

  return (
    <div>
      <h2>Cart List</h2>
      <Card>
        <CardBody>
          <CartList cartItems={booksInCart}/><br />
          <p>Tax: ${(totalWithoutTax * .086).toFixed(2)}</p>
          <p>Total: ${(totalWithoutTax * 1.086).toFixed(2)}</p>
          <Button >Checkout</Button>
        </CardBody>
      </Card>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Cart)
