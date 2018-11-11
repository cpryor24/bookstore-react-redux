import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/books.actions';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Book = props => {

  let handleClick = id => {
    props.addToCart(id);
  }

  return (
    <div>
      <Card key={props.book.id}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.book.title}</CardTitle>
          <CardSubtitle>{props.book.subtitle}</CardSubtitle>
          <CardText>{props.book.author}</CardText>
          <CardText>{props.book.description}</CardText>
          <Button onClick={() => handleClick(props.book.id)}>Add To Cart</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default connect(null, {addToCart})(Book)
