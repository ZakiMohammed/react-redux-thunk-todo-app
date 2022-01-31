import { createSlice } from '@reduxjs/toolkit'

export const spinnerSlice = createSlice({
    name: 'spinner',
    initialState: {
        loading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setLoading } = spinnerSlice.actions

export default spinnerSlice.reducer