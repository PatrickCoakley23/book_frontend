import React, {useState, useEffect, useContext}  from 'react'
import axios from "axios"
import { BookContext } from '../../context/BookContext';
import { useNavigate } from 'react-router-dom';
import {AddForm, List} from '../../components';


const Books = () => {
  const [books, setBooksData] = useState([]);
  const [formData, setFormData, validateForm, handleChange, errors, setErrors, axiosConfig] = useContext(BookContext)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //Prevent default refreshing
    e.preventDefault();

    const formErrors = validateForm()
    
    if(Object.keys(formErrors).length > 0){
        setErrors(formErrors)
    }else{
        axios.post("http://127.0.0.1:8000/api/book_add/", formData, axiosConfig)
        .then((resp) => {
            setBooksData([...books, resp.data ])
            setFormData({title: "",
              author: "",
              isbn: "",
              status: "Status"}
            )
        });
    }
  }

  console.log(books)

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this book from the list?")
    if(confirm) {
      const booksList = books.filter(book => book.id !== id);
      axios.delete(`http://127.0.0.1:8000/api/book_delete/${id}/`)
      .then(setBooksData(booksList))
      .then((resp) => {
        navigate('/')
      }).catch(err => console.log(err));
    }
  }

  useEffect(() => {
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
    },[])

  return (
    <div className="container">

      <div className="form-wrapper py-4 px-4">
          <div className="row">
              <div className="col-md-10 offset-md-1">
              <AddForm errors={errors} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
              </div>
          </div>
      </div>

      <div className="row">
      {books.map((book) => (
        <List key={book.id} book={book} handleDelete={handleDelete}/>
      ))}
      </div>
    </div>
  )
}

export default Books