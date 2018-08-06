import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage.js';
import BooksPage from './BooksPage.js';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     *
    showSearchPage: false*/

    books: []
  }  

  /*getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }*/

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksPage
        books={this.state.books}
        changeShelf={this.changeShelf}
        />
        )}/>
        <Route exact path="/search" render={() => (
          <SearchPage
        changeShelf={this.changeShelf}
        books={this.state.books}
        />)}/>
      </div>
    )
  }
}

export default BooksApp
