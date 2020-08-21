import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Books from './components/Books';
import AddBook from './components/AddBook';
import { v4 as uuidv4} from 'uuid'; 

class App extends Component {
  state = {
    books: [
      // {
      //   id: uuidv4(),
      //   title: 'Test',
      //   author: 'J.K.',
      //   pageCount: 50,
      //   hasRead: 'true',
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Test2',
      //   author: 'J.K.2',
      //   pageCount: 51,
      //   hasRead: 'false',
      // }
    ]
  }

  addBook = (title, author, pageCount, hasRead) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      pageCount,
      hasRead
    }
    this.setState({ books: [...this.state.books, newBook] })
  }

  delBook = (id) => {
    this.setState({ books: [...this.state.books.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Books books={this.state.books} delBook={this.delBook}/>
        <AddBook addBook={this.addBook} />
      </div>
    );
  }
}

export default App;
