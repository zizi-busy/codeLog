import React from 'react'
import { Link } from 'react-router-dom'

import { FaTrash, FaCheck, FaArrowLeft } from 'react-icons/fa'

const EditLog = ({ id, editLog, handleChange, log, deleteLog }) => {
  const { title, category, description } = log

  return (
    <>
      <section className="edit-log">
        <section id="actions" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <Link to="/" class="btn btn-light btn-block">
                  <FaArrowLeft /> Back To Dashboard
                </Link>
              </div>
              <div class="col-md-3">
                <Link
                  to="/"
                  class="btn btn-success btn-block"
                  onClick={() => editLog(id)}
                >
                  <FaCheck /> Save Changes
                </Link>
              </div>
              <div class="col-md-3">
                <Link to={`/log/delete/${id}`} class="btn btn-danger btn-block">
                  <FaTrash /> Delete Log
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section class="edit mt-5">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card">
                  <div class="card-header">
                    <Link to="/" class="close">
                      <span>&times;</span>
                    </Link>
                    <h5>Edit Log</h5>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label for="title">Title</label>
                        <input
                          type="text"
                          name="title"
                          class="form-control text-capitalize"
                          value={title}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="form-group">
                        <label for="category">Category</label>
                        <input
                          type="text"
                          name="category"
                          class="form-control text-capitalize"
                          value={category}
                          onChange={handleChange}
                        />
                      </div>

                      <div class="form-group">
                        <label for="body">Body</label>
                        <textarea
                          name="editor1"
                          class="form-control"
                          rows="10"
                          name="description"
                          value={description}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default EditLog
