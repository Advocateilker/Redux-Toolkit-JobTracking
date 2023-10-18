import React from 'react'
import { statusOpt, typeOpt, sortOpt } from '../constants'
import { toast } from 'react-toastify'
import { v4 } from 'uuid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
statusOpt

const AddJob = () => {

  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const form=new FormData(e.target);
    const newJob = Object.fromEntries(form.entries())

    //console.log(newJob)

    if(!newJob.type || !newJob.status){
      toast.info("Please Fill out the Form")
      return;
    }

    newJob.id= v4();
    newJob.date= new Date();

    axios.post("http://localhost:4010/jobs",newJob)
    .then(()=>{
      navigate("/")
      toast.success("Addition Successful")
    })
    .catch((err)=> toast.error("Addition Failed"))

  }
  return (
    <div className='add-page'>
      <section className='add-sec'>
        <h3>Add a New Job</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Position</label>
            <input type="text" name='position' required />
          </div>
          <div>
            <label>Company</label>
            <input type="text" name='company' required />
          </div>
          <div>
            <label>Location</label>
            <input type="text" name='location' required />
          </div>
          <div>
            <label>Status</label>
            <select name="status" >
              <option selected disabled>Choose</option>
              {statusOpt.map((item, i) => (<option key={i}>{item}</option>))}
            </select>
          </div>
          <div>
            <label>Type</label>
            <select name="type" >
              <option selected disabled>Choose</option>
              {typeOpt.map((item, i) => (<option key={i}>{item}</option>))}
            </select>
          </div >
          <div className="main-section">
            <button className="first-button"> Hover Me </button>
            <button className="second-button"> Add To List</button>
          </div>
        </form>
      </section >
    </div>
  )
}

export default AddJob