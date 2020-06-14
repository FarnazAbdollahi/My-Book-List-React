
import React from 'react';
import '../App.css';
// import PropTypes from 'prop-types';

class Book extends React.Component {


    render() {
        return (

            <tr>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.isbn}</td>
                <td><button onClick={this.props.deleteBook.bind(this, this.props.book.id)} className="btn btn-secondary">X</button></td>
            </tr>

        )
    }
}
export default Book;