import React, { Component } from 'react'

export class AddBook extends Component {
  state = {
    title: '',
    author: '',
    pageCount: '',
    hasRead: '',
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBook(this.state.title, this.state.author, this.state.pageCount, this.state.hasRead);
    this.setState({
      title: '',
      author: '',
      pageCount: '',
      hasRead: '',
    });
  }

  formStyle = () => {
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
    return (
      <div style={this.formStyle()}>
        <form onSubmit={this.onSubmit} autoComplete="off">
          Title: <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
          <br></br>
          Author: <input type="text" name="author" value={this.state.author} onChange={this.onChange} />
          <br></br>
          Page Count: <input type="text" name="pageCount" value={this.state.pageCount} onChange={this.onChange} />
          <br></br>
          Read yet? <input type="text" name="hasRead" value={this.state.hasRead} onChange={this.onChange} />
          <br></br>
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddBook
