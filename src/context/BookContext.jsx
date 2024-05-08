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
        const {isbn,} = formData
        const newErrors = {}
    
        if(!isbn) newErrors.isbn = 'Please enter isbn'
    
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