import React from 'react'
import axios from 'axios'
import { Link,} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const List = (props) => {
    const {id, title, author, isbn, status} = props.book 
    const handleDelete = props.handleDelete

  return (
    <React.Fragment>
        <div className="col-6 offset-3 col-sm-4 offset-sm-0 col-md-3 col-lg-2 my-3">
            <div className="card h-100">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title" data-testid={`book-${id}`}>{title}</h5>
                    <p className="card-text">{author}</p>
                    <p className="card-text">ISBN: {isbn}</p>
                    <p className="card-text mb-auto">Status: {status}</p>
                    <Link className="btn btn-dark btn-sm edit-btn mb-2 " to={`/edit_book/${id}`} role="button">Edit</Link>
                    <button onClick={() => handleDelete(id)} className='btn btn-sm btn-primary delete-btn mb-2'>Delete</button>
                </div>
            </div>
        </div>

    </React.Fragment>
  )
}

export default List