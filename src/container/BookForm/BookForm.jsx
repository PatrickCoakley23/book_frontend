import React, {useState,}  from 'react'
import axios from "axios"

import './BookForm.css';

const BookForm = () => {
    const [data, setData] = useState({
        title: "",
        author: "",
        isbn: "",
        status: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData({
          ...data,
          [name]: value
        });
        
      };
      console.log(data)
    
      const handleSubmit = (e) => {
        //Prevent default refreshing
        e.preventDefault();
        const bookData = {
            title: data.title,
            author: data.author,
            isbn: data.isbn,
            status: data.status
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                // "Access-Control-Allow-Origin": "*",
            }
        };
          

        axios.post("http://127.0.0.1:8000/api/book_add/", bookData, axiosConfig)
        .then((res) => {console.log(res.data, res.status);
        });
}
    

  return (
    <section className='book-form'>
        <div className="container">
            <div className="form-wrapper py-4 px-4">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <form id="form" onSubmit={handleSubmit}>
                            <h2 className='text-center mb-4 text-white'>Add To Book List</h2>
                            <input type="title" name="title" value={data.title} onChange={handleChange} className="form-control mb-3" placeholder="Title" />
                            <input type="author" name="author" value={data.author} onChange={handleChange} className="form-control mb-3"placeholder="Author"/>
                            <input type="isbn" name="isbn" value={data.isbn} onChange={handleChange} className="form-control mb-3"placeholder="ISBN"/>
                            <select className="form-select mb-3" name="status" value={data.status}  onChange={handleChange}>
                                <option >Status</option>
                                <option value="Unread">Unread</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Finished">Finished</option>
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