import React from 'react'
import { Link } from 'react-router-dom'

const List = (props) => {
    const {id, title, author, isbn, status} = props.book 

  return (
    <React.Fragment>
        <div className="col col-md-2 my-3">
            <div className="card h-100">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{author}</p>
                    <p className="card-text">ISBN: {isbn}</p>
                    <p className="card-text mb-auto">Status: {status}</p>
                    <Link to={`/edit_book/${id}`}><button className='btn btn-sm btn-outline-info edit-btn mb-2'>Edit</button></Link>
                    <button className='btn btn-sm btn-outline-dark delete-btn mb-2'>Delete</button>
                </div>
            </div>
        </div>

    </React.Fragment>
  )
}

export default List