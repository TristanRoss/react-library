import React, { Component } from 'react';
import Book from './Book';

export class Books extends Component {
  render() {
    return this.props.books.map((book) => (
        <Book key={book.id} book={book} delBook={this.props.delBook}/>
    ));
  }
}

export default Books
