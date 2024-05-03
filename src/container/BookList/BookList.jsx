import React, {useState, useEffect}  from 'react'
import axios from "axios"



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

    },[])
  return (
    <div className="container">
        <div id="book-list-wrapper">

        </div>
    </div>
  )
}

export default BookList