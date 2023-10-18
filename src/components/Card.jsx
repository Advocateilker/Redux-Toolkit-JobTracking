import React from 'react'
import { FaMapMarkedAlt, FaSuitcase, FaCalendar } from 'react-icons/fa'

const Card = ({ job }) => {
    //console.log(job)
    const getClassName = () => {
        switch (job.status) {
            case "Process":
                return "pending";
            case "Rejected":
                return "rejected";
            case "Interview":
                return "interview";
            default:
                return 'default';
        }
    }

    return (
        <div className='card'>
            <div className='head'>
                <div className='letter'>
                    <p>{job?.company[0]}</p>
                </div>
                <div className='info'>
                    <p>{job?.position}</p>
                    <p>{job?.company}</p>
                </div>
            </div>
            <div className='body'>
                <div className='field'>
                    <FaMapMarkedAlt />
                    <p>{job?.location}</p>
                </div>
                <div className='field'>
                    <FaSuitcase />
                    <p>{job?.type}</p>
                </div>
                <div className='field'>
                    <FaCalendar />
                    <p>  {new Date(job?.date).toLocaleDateString()}</p>
                </div>
                <div className='status'>

                    <span className={getClassName()} >{job?.status}</span>
                </div>


            </div>
        </div>
    )
}

export default Card