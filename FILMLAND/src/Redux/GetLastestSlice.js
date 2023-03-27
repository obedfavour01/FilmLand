import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: '',
    data: []
}


export const GetLatestSlice = createSlice({
    name:'getLatest',
    initialState,
    reducers: {
            fetchStart: (state) => {
                state.loading =true
            },
            fetchSuccess: (state,action) => {
                state.loading = false
                state.data = action.payload
            },
        
            fetchFailure : (state) => {
                state.loading = false;
                state.error = true
            },

          
    }

});


export const {fetchStart,fetchSuccess,fetchFailure} = GetLatestSlice.actions


export default GetLatestSlice.reducer;