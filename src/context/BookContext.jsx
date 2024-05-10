import React from 'react'
import {createContext, useEffect, useState} from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        isbn: "",
        status: "Status"
    });

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            // "Access-Control-Allow-Origin": "*",
        }
    };

    const validateForm = () => {
        const {title, author, isbn, status} = formData
        const newErrors = {}
        
        if(!title || title === '') newErrors.title = 'Please enter a Title'
        if(!author || title === '') newErrors.author = 'Please enter an Author'
        if(!isbn || title === '') 
            newErrors.isbn = 'Please enter ISBN'
        else if(isbn.length < 10)
            newErrors.isbn = 'Not enough characters for a valid ISBN'
        if(!status || status === "Status") newErrors.status = 'Please enter valid Status'
        return newErrors
    }

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

  return (
    <BookContext.Provider value={[
        formData, setFormData, validateForm, 
        handleChange, 
        errors, setErrors, axiosConfig]}> 
        {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;