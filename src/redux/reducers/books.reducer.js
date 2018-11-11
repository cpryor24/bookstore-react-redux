import {
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  SEARCH_BOOKS
} from '../actions/books.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART_SUCCESS:
      return state.map(book => {
        if(book.id === parseInt(action.payload)){
          book.inCart = true;
        }
        return book;
      })

    case REMOVE_FROM_CART_SUCCESS:
      return state.map(book => {
        if(book.id === parseInt(action.payload)){
          book.inCart = false;
        }
        return book;
      })

    case SEARCH_BOOKS:
      return action.payload;

    case FETCH_BOOKS_SUCCESS:
      return action.payload;

    case FETCH_BOOKS_FAILED:
      return action.payload;

    default:
      return state;
  }
}
