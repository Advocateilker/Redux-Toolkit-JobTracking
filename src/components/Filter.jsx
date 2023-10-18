import React, { useRef } from 'react'
import { sortOpt, typeOpt, statusOpt } from '../constants'
import { useDispatch } from "react-redux"
import { clearFilter, filterBySearch, filterBySort, filterByStatus, filterByType } from '../redux/jobSlice'

const Filter = () => {
    const searchRef = useRef(null);
    const statusRef = useRef(null);
    const typeRef = useRef(null);
    const sortRef = useRef(null);


    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(filterBySearch(e.target.value))
    }

    const handleClear = () => {
        dispatch(clearFilter())
        searchRef.current.value = ""
        statusRef.current.value = "Choose"
        typeRef.current.value = "Choose"
        sortRef.current.value = "Choose"
    }

    return (
        <section className='filter-sec'>
            <h3>Filter Form</h3>
            <form>
                <div>
                    <label>Search-Positions</label>
                    <input ref={searchRef} onChange={handleSearch} type="search " />
                </div>
                <div>
                    <label>Status</label>
                    <select ref={statusRef} onChange={(e) => dispatch(filterByStatus(e.target.value))} >
                        <option selected disabled>Choose</option>
                        {statusOpt.map((item, i) => (<option key={i}>{item}</option>))}
                    </select>
                </div>
                <div>
                    <label>Type</label>
                    <select ref={typeRef} onChange={(e) => dispatch(filterByType(e.target.value))}>
                        <option selected disabled>Choose</option>
                        {typeOpt.map((item, i) => (<option key={i}>{item}</option>))}
                    </select>
                </div >
                <div>
                    <label>Sort</label>
                    <select ref={sortRef} onChange={(e) => dispatch(filterBySort(e.target.value))}>
                        <option selected disabled>Choose</option>
                        {sortOpt.map((item, i) => (<option key={i}>{item}</option>))}
                    </select>
                </div >

            </form>
            <div className="main-section">
                <button onClick={handleClear} class="button">

                    <span class="base"></span>
                    <span class="red"></span>
                </button>
                <span className='press'>Press to Clear</span>
            </div>
        </section >
    )
}

export default Filter