import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <img width={105} src='https://img.freepik.com/premium-vector/find-job-logo-template-design_316488-884.jpg' alt="" />

      <nav>
        <NavLink to={'/'}>Job List</NavLink>
        <NavLink to={'/add-job'}>Add a Job</NavLink>
      </nav>

    </header>
  )
}

export default Header