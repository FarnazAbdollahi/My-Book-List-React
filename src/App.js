import React from 'react';
import './App.css';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import uuid from 'uuid';



class App extends React.Component {

  state = {
    books: [
      {
        id: uuid(),
        title: 'Book1',
        author: 'author1',
        isbn: '1111'
      }
    ]
  }
  addBook = (title, author, isbn) => {

    if (title !== '' && author !== '' && isbn !== '') {
      const newBook = {
        id: uuid(),
        title,
        author,
        isbn
      }
      this.setState({ books: [...this.state.books, newBook] });
    }
    else {
      alert("Fill the inputs");
    }
  }
  deleteBook = (id) => {
    this.setState({
      books: [...this.state.books.filter(book => book.id !== id)]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddBook addBook={this.addBook} />
          <BookList books={this.state.books} deleteBook={this.deleteBook} />
        </div>
      </div >
    );
  }
}
export default App;
