import React, {Component} from 'react';
import SingleBook from './SingleBook';
import { Link } from 'react-router-dom';

class BooksPage extends Component {
    render() {
        return (
          <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">

              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.props.books
                    .filter(book => book.shelf === 'currentlyReading')
                    .map(book => (<li key={book.id}>   
                      <SingleBook 
                        book={book}
                        defaultShelf='currentlyReading'
                        changeShelf={this.props.changeShelf}
                      />
                    </li>))
                  }
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books
                      .filter(book => book.shelf === 'wantToRead')
                      .map(book => (<li key={book.id}>   
                        <SingleBook 
                          book={book}
                          changeShelf={this.props.changeShelf}
                          defaultShelf='wantToRead'
                        />
                      </li>))
                    }
                  </ol>
                </div>
              </div>
              
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books
                      .filter(book => book.shelf === 'read')
                      .map(book => (<li key={book.id}>   
                        <SingleBook 
                          book={book}
                          changeShelf={this.props.changeShelf}
                          defaultShelf='read'
                        />
                      </li>))
                    }
                  </ol>
                </div>
              </div>
              
            </div>

            <div className="open-search">
              <Link 
                to='/search'>Add a book
                </Link>
            </div>
            
          </div>
        );
    }
}

export default BooksPage;