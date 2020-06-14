import React from 'react';
import '../App.css';

class AddBook extends React.Component {
    state = {
        title: '',
        author: '',
        isbn: ''
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addBook(this.state.title, this.state.author, this.state.isbn);
        this.setState({ title: '', author: '', isbn: '' });
    }

    render() {
        return (
            <div className="container" id="addNewBook">
                <form className="newBook">
                    <label> Title: </label>
                    <input type="text" name="title" value={this.state.title} className="form-control mb-2 mr-sm-2" onChange={this.onChange} />

                    <label> Author: </label>
                    <input type="text" name="author" value={this.state.author} className="form-control  mb-2 mr-sm-2" onChange={this.onChange} />

                    <label> ISBN: </label>
                    <input type="text" name="isbn" value={this.state.isbn} className="form-control mb-2 mr-sm-2" onChange={this.onChange} />

                    <button type="button" onClick={this.onSubmit.bind(this)} className="save btn btn-primary">Save</button>
                </form>
            </div >
        );
    }
}
export default AddBook;
