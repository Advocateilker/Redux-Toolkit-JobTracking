import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setJob, setError } from '../redux/jobSlice'
import Loading from '../components/Loading'
import Filter from '../components/Filter'



const JobList = () => {
  const { initialized, isError, jobs } = useSelector((store) => store)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://localhost:4010/jobs')
      .then((res) => dispatch(setJob(res.data)))
      .catch((err) => dispatch(setError()))
  }, [])

    return (
    <div className='list-page'>
      <Filter/>

      <h3 className='job-count'>
        There are ({jobs?.length}) displayed among the ({jobs?.length}) jobs found.
      </h3>

      <section className='job-list'>

        {!initialized && <Loading/> }
        {initialized && !isError ? jobs?.map((job)=>  <Card key={job.id} job={job}/> ): <p>Sorry, There is an Error</p> }
      </section>
    </div>
  )
}

export default JobList