import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import SingleBook from './SingleBook';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
	
	state = {
		query: '',
		foundBooks: []
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		});
		this.showBooks(query);
	}

	showBooks = (query) => {
		if (query) {
		BooksAPI.search(query).then((foundBooks) => {
			if (foundBooks.error) {
				this.setState({ foundBooks: [] })
			}
			else {
			this.setState({ foundBooks: foundBooks });
			}
		})}
		else {
			this.setState({ foundBooks: [] })
		}
	}
	
	render() {
        return (
            <div className="search-books">
				<div className="search-books-bar">					
					<Link className="close-search" to='/'>Close</Link>                	
					
					<div className="search-books-input-wrapper">
							{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
							*/}
                    		
						<input 
							type="text" 
							placeholder="Which one would you like to read next? :)"
							value={this.state.query}
							onChange={(event)=>this.updateQuery(event.target.value)}
						/>
                	</div>
                </div>
                
				<div className="search-books-results">
                	<ol className="books-grid">
						{this.state.foundBooks.map(foundBooks => {
							let shelf = "none"

							this.props.books.map(book => (
								book.id === foundBooks.id ?
								shelf = book.shelf
								: ''
							))

							return (
								<li key={foundBooks.id}>
									<SingleBook 
										book={foundBooks}					
										changeShelf={this.props.changeShelf}
										defaultShelf={shelf}
							/>
							</li>
							)
						})}
					</ol>
                </div>
          </div>
        );
    }
}

export default SearchPage;