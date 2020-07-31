import React from 'react'
import { Link } from 'react-router-dom'

const DeleteLog = ({ id, deleteLog }) => {
  return (
    <section className="py-4 mb-4 bg-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className=" text-center mb-4">
              Are you sure you want to delete this log?
            </h4>
            <div className="d-flex justify-content-center mb-4">
              <div class="col-md-3">
                <Link
                  to="/"
                  className="btn btn-danger btn-block"
                  onClick={() => deleteLog(id)}
                >
                  Delete
                </Link>
              </div>
              <div class="col-md-3">
                <Link
                  to={`/log/${id}`}
                  className="btn btn-white border btn-block"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeleteLog
