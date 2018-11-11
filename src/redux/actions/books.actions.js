import axios from 'axios';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED';
export const SEARCH_BOOKS = 'SEARCH_BOOKS';

export const addToCart = id => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: id
    })
  }
}

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART_SUCCESS,
    payload: id
  }
}

export const fetchBooks = () => {
  return dispatch => {
    axios
      .get('http://localhost:8082/api/books')
      .then(res => dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: FETCH_BOOKS_FAILED,
        payload: err
      }))
  }
}

export const searchBooks = book => {
  return dispatch => {
    dispatch({
      type: SEARCH_BOOKS,
      payload: book
    })
  }
}
