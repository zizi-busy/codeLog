import React from 'react'
import { Link } from 'react-router-dom';

const AddLog = ({ log, addLog, handleChange, setInitial }) => {
    const {title,category,description} = log
    return (
        <>
        <section class="add-log mt-5">
    <div class="container">
      <div class="row">
      <div class="col">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <Link to='/' class="close">
            <span>&times;</span>
          </Link><h5>New Log</h5>
          
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" name = 'title' class="form-control text-capitalize" value = {title} onChange = {handleChange} />
            </div>
            <div class="form-group">
              <label for="category">Category</label>
              <input type="text" name = 'category' class="form-control text-capitalize" value = {category} onChange = {handleChange} />
            </div>
    
            <div class="form-group">
              <label for="body">Body</label>
              <textarea name="editor1" class="form-control" rows="10" name = 'description' value = {description} onChange = {handleChange}></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
        <Link to="/" class="btn btn-primary" onClick = {addLog} data-dismiss="modal">Save Log </Link>
       
        </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  </>
    )
}

export default AddLog
