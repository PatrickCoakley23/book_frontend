import React, {useState, useEffect, useContext}  from 'react'
import {useParams, useNavigate, Link } from 'react-router-dom'
import { BookContext } from '../../context/BookContext';
import api from '../../api/books'

import {EditForm,} from '../../components';

const EditBook = () => {
  const [formData, setFormData, validateForm, setErrors, axiosConfig, handleChange, errors] = useContext(BookContext)
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
      e.preventDefault()
  
      const formErrors = validateForm()
      
      if(Object.keys(formErrors).length > 0){
          setErrors(formErrors)
      }else{
          api.post(`/api/book_update/${id}/`, formData, axiosConfig)
          .then((resp) => {
              setFormData({title: "",
              author: "",
              isbn: "",
              status: "Status"}
            )
              navigate('/')
          })
          .catch(err => console.log(err));
          
      }
  }
  
  useEffect(() => {
    api.get(`/api/book_selected/${id}/`)
        .then((resp) => {
        setFormData(resp.data)
        }).catch(err => 
        console.log('error', err));
  },[])


  return (

    <div className="container">
      <div className="form-wrapper py-4 px-4">
      {formData.title && 
        <div className="row">
            <div className="col-md-10 offset-md-1">
              
              <EditForm 
              handleUpdate={handleUpdate}
              errors={errors}
              id={id}
              formData={formData}
              setFormData={setFormData}
              />
            </div>
        </div>
      }
      {!formData.title && 
        <div>
          <h2>Post Not Found</h2>
          <p>
          <Link to='/'>Visit Our Homepage</Link>
          </p>
        </div>
      }
      </div>
    </div>
  ) 
}

export default EditBook
