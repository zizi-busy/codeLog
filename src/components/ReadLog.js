import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash, FaPencilAlt, FaArrowLeft, FaClock,FaTag } from 'react-icons/fa'

const ReadLog = ({ id, logs, deleteLog, editInput }) => {
  const log = logs.filter(log => log.id === id)

  const {title, category, description, date} = log[0]
  return (
    <>
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
                to={`/log/edit/${id}`}
                class="btn btn-warning btn-block"
                onClick={() => editInput(id)}
              >
                <FaPencilAlt /> Edit Log
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

      <section class="read-log mt-5">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header bg-primary text-white">
                  <Link to="/" class="close">
                    <span>&times;</span>
                  </Link>
                  <small class="text-white mr-2 mb-2"> 
                  <FaTag  /> {category}
                  </small>
                  <h5 className="mt-2">{title}</h5>
              
               
                </div>

                <div class="card-body">{description}

                </div>
                    <div class="card-footer text-muted bg-transparent border-top-0">
                        <small> 
                        <FaClock /> {date}
                        </small>
                    </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReadLog
