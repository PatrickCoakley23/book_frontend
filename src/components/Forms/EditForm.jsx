import React, {useContext } from 'react'
import {Form, Button} from 'react-bootstrap'
import { BookContext } from '../../context/BookContext';

const EditForm = ({handleUpdate}) => {
    // const [formData, handleChange] = useContext(BookContext)

    const [formData, setFormData, validateForm, handleChange, errors] = useContext(BookContext)
    
  return (
    <React.Fragment>
        <Form  id="form" onSubmit={handleUpdate}>
            <h2 className='text-center mb-4 text-white'>Edit Book</h2>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Control type="title" name="title" onChange={handleChange} placeholder="Title" value={formData.title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Control type="author" name="author" value={formData.author} onChange={handleChange} placeholder="Author" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicIsbn">
                <Form.Control type="isbn" name="isbn" value={formData.isbn} onChange={handleChange} placeholder="ISBN" isInvalid={!!errors.isbn}/>
                <Form.Control.Feedback type="invalid">{errors.isbn}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Select  name="status" onChange={handleChange} value={formData.status}>
                    <option> Status</option>
                    <option >Unread</option>
                    <option >In Progress</option>
                    <option >Finished</option>
                </Form.Select>
            </Form.Group>
            <Button className="submit-btn form-control" type="submit">
                Submit
            </Button>
        </Form>
    </React.Fragment>
  )
}

export default EditForm