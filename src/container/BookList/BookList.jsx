import React, {useState, useEffect}  from 'react'
import axios from "axios"
import List from './List'
import './BookList.css';


const BookList = () => {
    const [books, setBooksData] = useState([]);

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchBooksBackend () {
            try{
              axios
                  .get(`http://127.0.0.1:8000/api/books/`)
                  .then((resp) => {
                    setBooksData(resp.data)
                  })
            } catch (err) {
                console.log('error', err)
            }
          }
          fetchBooksBackend();


          return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };

    },[books])
  return (
    <div className="container">
        <div className="row">
        {books.map((book) => (
            <List key={book.id} book={book} />
        ))}
        </div>
    </div>
  )
}

export default BookList