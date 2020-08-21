import React, { Component } from 'react'

export class Book extends Component {
  bookStyle = () => {
    return {
      background: '#a65d5d',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '2px',
      color: 'white',
      width: '25%',
      margin: '25px auto',
      textAlign: 'center',
    }
  }

  render() {
    const { id, title, author, pageCount } = this.props.book;
    return (
      <div style={this.bookStyle()}>
        <h2>{ title }</h2>
        <p>{ author }</p>
        <p>{ pageCount + ' pages'}</p>
        <p>{ this.props.book.hasRead === 'true' ? 'Has been read' : 'Not read yet' }</p>
        <button onClick={this.props.delBook.bind(this, id)} className="btn">Delete Book</button>
      </div>
    )
  }
}

export default Book
