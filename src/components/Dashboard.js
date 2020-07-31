import React from 'react'
import LogPreview from './LogPreview'
import { Link } from 'react-router-dom'
import { FaPlus, FaCog, FaPencilAlt } from 'react-icons/fa'

const Dashboard = ({ logs, deleteLog, editLog }) => {
  const allLogPreviews = logs.map((log) => (
    <LogPreview
      key={log.id}
      log={log}
      deleteLog={deleteLog}
      editLog={editLog}
    />
  ))

  return (
    <>
      <header className="main-header py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <FaCog /> Dashboard
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className="actions py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link
                to="/newlog"
                className="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#addPostModal"
              >
                <FaPlus className="mr-1" /> New Entry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="log-previews ">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mb-5">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Logs</h4>
                </div>

                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Last Edit</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{allLogPreviews}</tbody>
                </table>
              </div>
            </div>
            <div class="col-md-3">
              <div class="number-logs card text-center bg-warning text-white mb-3">
                <div class="card-body">
                  <h3>Logs</h3>
                  <h4 class="display-4">
                    <FaPencilAlt /> {logs.length}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
