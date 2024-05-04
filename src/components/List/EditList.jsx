import React from 'react'

const EditList = (props) => {
    const formData = props.formData 
    const handleEditFormChange = props.handleEditFormChange
    const handleUpdate = props.handleUpdate

  return (
    <React.Fragment>
        <div className="col col-md-2 my-3">
  
                <div className="card h-100">
                    <div className="card-body d-flex flex-column">
                        <form onSubmit={handleUpdate}>
                        <div className="row">
                        <input className="card-title" type="text" placeholder="Enter a title..." name="title" value={formData.title} onChange={handleEditFormChange}></input>
                        <input className="card-text" type="text" placeholder="Enter an author..." name="author" value={formData.author} onChange={handleEditFormChange}></input>
                        <input className="card-text" type="text" placeholder="Enter the ISBN..." name="isbn" value={formData.isbn} onChange={handleEditFormChange}></input>
                        </div>
                        <button className='btn btn-sm btn-outline-info save-btn mb-2'>Save</button>
                        {/* <button className='btn btn-sm btn-outline-dark cancel-btn mb-2'>Cancel</button> */}
                        </form>
                    </div>
                </div>

        </div>

    </React.Fragment>
  )
}

export default EditList