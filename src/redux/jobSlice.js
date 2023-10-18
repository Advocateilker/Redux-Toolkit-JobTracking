import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    mainJobs: [],
    initialized: false,
    isError: false
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJob: (state, action) => {
            state.jobs = action.payload;
            state.mainJobs = action.payload;
            state.initialized = true;
            state.isError = false;

        },
        setError: (state) => {
            state.initialState = true;
            state.isError = true;
        },
        filterBySearch: (state, action) => {

            const query = action.payload.toLowerCase();
            const filter = state.mainJobs.filter((job) => job.position.toLowerCase().includes(query))

            state.jobs = filter;

        },
        filterByStatus: (state, action) => {

            const filtered = state.mainJobs.filter((job) => job.status === action.payload)

            state.jobs = filtered
        },
        filterByType: (state, action) => {
            const filtered = state.mainJobs.filter((job) => job.type === action.payload)

            state.jobs = filtered

        },
        filterBySort: (state, action) => {
            switch (action.payload) {
                case "a-z":
                    state.jobs.sort((a,b)=>a.company.localeCompare(b.company))
                    break;
                case "z-a":
                    state.jobs.sort((a,b)=>b.company.localeCompare(a.company))
                    break;
                case "Old":
                    state.jobs.sort((a,b)=>new Date (a.date)- new Date (b.date))
                    break;
                case "New":
                    state.jobs.sort((a,b)=>new Date (b.date)- new Date (a.date))
                    break;
                default:
                    break;
            }
        },
        clearFilter: (state) => {
            state.jobs = state.mainJobs;
        }
    }

})


export const { setJob, setError, filterBySearch, filterBySort, filterByStatus, filterByType, clearFilter } = jobSlice.actions;

export default jobSlice.reducer