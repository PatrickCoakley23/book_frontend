import React, {useState,}  from 'react'
import axios from "axios"

import './BookForm.css';

const BookForm = () => {
    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [isbn, setIsbn] = useState([]);
    const [status, setStatus] = useState([]);

    const handleSubmit = (e) => {
        //Prevent default refreshing
        e.preventDefault();
        const book = {title, author, isbn, status};

        axios.post("http://127.0.0.1:8000/api/book_add/", book)
        .then((res) => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })



    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const userData = {
    //       email: data.email,
    //       password: data.password
    //     };
    //     axios.post("https://reqres.in/api/login", userData).then((response) => {
    //       console.log(response.status, response.data.token);
    //     });
    //   };



  return (
    <section className='book-form'>
        <div className="container">
            <div className="form-wrapper py-4 px-4">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <form onSubmit={handleSubmit} id="form">
                            <h2 className='text-center mb-4 text-white'>Add To Book List</h2>
                            <input type="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control mb-3" id="inputTitle" placeholder="Title" />
                            <input type="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}  className="form-control mb-3" id="inputAuthor" placeholder="Author"/>
                            <input type="isbn" name="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)}  className="form-control mb-3" id="inputIsbn" placeholder="ISBN"/>
                            <select className="form-select mb-3" id="inlineFormCustomSelectPref">
                                <option >Status</option>
                                <option value={status} onChange={(e) => setStatus(e.target.value)} >Unread</option>
                                <option value={status} onChange={(e) => setStatus(e.target.value)}>In Progress</option>
                                <option value={status} onChange={(e) => setStatus(e.target.value)}>Finished</option>
                            </select>
                            <button className="submit-btn form-control">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookForm