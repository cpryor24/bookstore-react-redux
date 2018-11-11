import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import { FormGroup, Input } from 'reactstrap';


class BookList extends Component {
  state = {
    searchBar: ''
  };

  handleChange = e => {
    this.setState({
      searchBar: e.target.value
    })
  };

  render() {
    let listOfBooks = this.props.books
      .filter(book => book.title.toLowerCase().includes(this.state.searchBar) || book.author.toLowerCase().includes(this.state.searchBar))
      .map(book => <Book key={book.id} book={book} />)

    return (
      <div>
        <h2>Book List</h2>
        <FormGroup>
          <Input
            type="text"
            name="search"
            id="search"
            onChange={this.handleChange}
            placeholder="Search by author or title"
          />
        </FormGroup>
        {listOfBooks}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList)
