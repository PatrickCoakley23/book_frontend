import React from 'react'
import './BookForm.css';

const BookForm = () => {
  return (
    <section className='book-form'>
        <div className="container">
            <div className="form-wrapper py-4 px-4">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <form action="" id="form">
                            <h2 className='text-center mb-4 text-white'>Add To Book List</h2>
                            <input type="title" name="title "className="form-control mb-3" id="inputTitle" placeholder="Title" />
                            <input type="author" name="author" className="form-control mb-3" id="inputAuthor" placeholder="Author"/>
                            <input type="isbn" name="isbn" className="form-control mb-3" id="inputIsbn" placeholder="ISBN"/>
                            <select className="form-select mb-3" id="inlineFormCustomSelectPref">
                                <option >Status</option>
                                <option value="Unread">Unread</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Finished">Finished</option>
                            </select>
                            <button className="submit-btn form-control">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookForm