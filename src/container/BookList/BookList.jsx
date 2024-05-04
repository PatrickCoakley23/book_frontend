import React, {useState, useEffect, Fragment}  from 'react'
import axios from "axios"

import {List, EditList} from '../../components/'
import './BookList.css';
import AddForm from '../../components/Forms/AddForm';

const BookList = () => {
  const [books, setBooksData] = useState([]);
  const [refresh, setRefresh] = useState(0)
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    status: "Status"
  });
  const [editBookId, setEditBookId] = useState([]); 
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if(!!errors[name])
    setErrors({
        ...errors,
        [name]: null
            
    })
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    const name = e.target.name;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        // "Access-Control-Allow-Origin": "*",
    }
  };

  const validateForm = () => {
    const {isbn,} = formData
    const newErrors = {}

    if(!isbn) newErrors.isbn = 'Please enter isbn'

    return newErrors
  }

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

  const handleEditClick = (e, book) => {
    e.preventDefault();
    setEditBookId(book.id);

    setFormData({
    id: book.id,
    title: book.title,
    author: book.author,
    isbn: book.isbn,
    status: book.status}
    )
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    const formErrors = validateForm()
    
    if(Object.keys(formErrors).length > 0){
        setErrors(formErrors)
    }else{
        axios.post(`http://127.0.0.1:8000/api/book_update/${formData.id}/`, formData, axiosConfig)
        .then((resp) => {
            
            setFormData({title: "",
              author: "",
              isbn: "",
              status: "Status"}
            )
            // setBooksData([...books, resp.data ])
            // window.location.reload();
        })
        .catch(err => console.log(err));
        
    }
  }

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

      <div className="form-wrapper py-4 px-4">
          <div className="row">
              <div className="col-md-10 offset-md-1">
              <AddForm errors={errors} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/>
              </div>
          </div>
      </div>

      <div className="row">
      {books.map((book) => (
        <Fragment>
          {editBookId === book.id ? ( 
          <EditList formData={formData} handleEditFormChange={handleEditFormChange} handleUpdate={handleUpdate}/> ) : ( 
          <List key={book.id} book={book} handleEditClick={handleEditClick}/> )
          }
        </Fragment>
      ))}
      </div>
    </div>
  )
}

export default BookList