import React from 'react'

const Footer = () => {
    return (
        <footer  className=" footer bg-dark text-white mt-5 p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="lead text-center">
                Copyright &copy;
                <span className="year">{new Date().getFullYear().toString()} </span>
                 CodeLog
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
