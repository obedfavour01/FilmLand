import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    id : 603692,
    error: '',
    data: []
}


export const MovieSlice = createSlice({
    name:'movies',
    initialState,
    reducers: {
            fetchStart: (state) => {
                state.loading =true
            },
            fetchSuccess: (state,action,id) => {
                state.loading = false
                state.data = action.payload
                state.id = id
            },
        
            fetchFailure : (state) => {
                state.loading = false;
                state.error = true
            },

          
    }

});


export const {fetchStart,fetchSuccess,fetchFailure} = MovieSlice.actions


export default MovieSlice.reducer;