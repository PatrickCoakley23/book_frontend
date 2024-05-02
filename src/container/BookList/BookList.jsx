import React from 'react'

const BookList = () => {
  return (
    <div className="container">
        <div className="book-container">
            <div className="form-wrapper">
                <form action="" id="form">
                    <div class="form-group row">
                        <label for="inputTitle" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10 mb-3">
                            <input type="title" class="form-control" id="inputTitle" placeholder="Title" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputAuthor" class="col-sm-2 col-form-label">Author</label>
                        <div class="col-sm-10 mb-3">
                            <input type="author" class="form-control" id="inputAuthor" placeholder="Author"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputIsbn" class="col-sm-2 col-form-label">ISBN</label>
                        <div class="col-sm-10 mb-3">
                            <input type="isbn" class="form-control" id="inputIsbn" placeholder="ISBN"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="my-1 mr-2" for="inlineFormCustomSelectStatus">Status</label>
                        <select class="custom-select my-3 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Choose...</option>
                            <option value="Unread">Unread</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Finished">Finished</option>
                        </select>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10 mb-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default BookList