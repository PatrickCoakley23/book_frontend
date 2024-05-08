import React, {useState, useEffect, useContext}  from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import axios from "axios"
import { BookContext } from '../../context/BookContext';

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
          axios.post(`http://127.0.0.1:8000/api/book_update/${id}/`, formData, axiosConfig)
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
    axios.get(`http://127.0.0.1:8000/api/book_selected/${id}/`)
        .then((resp) => {
        setFormData(resp.data)
        }).catch(err => 
        console.log('error', err));
  },[])

  return (
    <div className="container">
      <div className="form-wrapper py-4 px-4">
        <div className="row">
            <div className="col-md-10 offset-md-1">
              <EditForm 
              handleUpdate={handleUpdate}
              errors={errors}
              id={id}
              formData={formData}
              />
            </div>
        </div>
      </div>
    </div>
  ) 
}

export default EditBook