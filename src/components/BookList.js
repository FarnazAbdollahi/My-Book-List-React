import React from 'react';
import '../App.css';
import Book from './Book';

class BookList extends React.Component {


    render() {
        return (
            < div >
                <br />
                <table className="table">
                    <tbody className="bookList">

                        <tr className="thead-dark">
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN</th>
                            <th>Delete</th>
                        </tr>
                        {this.props.books.map((book) => (
                            <Book key={book.id} book={book} deleteBook={this.props.deleteBook} />
                        ))}
                    </tbody>
                </table>
                <br />
            </div >

        );
    }
}
export default BookList;
