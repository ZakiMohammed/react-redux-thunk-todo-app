import { createSlice } from '@reduxjs/toolkit'
import TaskThunk from './TaskThunk'

const showLoading = (state, action) => { state.loading = true }
const hideLoading = (state, action) => { state.loading = false }

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: null,
        tasks: [],
        loading: false
    },
    reducers: {
        setTask: (state, action) => {
            state.task = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            // getAllAsync
            .addCase(TaskThunk.getAllAsync.pending, showLoading)
            .addCase(TaskThunk.getAllAsync.fulfilled, (state, action) => {
                state.loading = false
                state.tasks = action.payload
            })
            .addCase(TaskThunk.getAllAsync.rejected, (state, action) => {
                state.loading = false
                state.tasks = []
            })

            // addAsync
            .addCase(TaskThunk.addAsync.pending, showLoading)
            .addCase(TaskThunk.addAsync.fulfilled, (state, action) => {
                state.loading = false
                state.tasks = [action.payload, ...state.tasks]
            })
            .addCase(TaskThunk.addAsync.rejected, hideLoading)

            // updateAsync
            .addCase(TaskThunk.updateAsync.pending, showLoading)
            .addCase(TaskThunk.updateAsync.fulfilled, (state, action) => {
                state.loading = false
                state.task = null
                state.tasks = state.tasks.map(i => i._id === action.payload._id ? i = action.payload : i)
            })
            .addCase(TaskThunk.updateAsync.rejected, hideLoading)

            // removeAsync
            .addCase(TaskThunk.removeAsync.pending, showLoading)
            .addCase(TaskThunk.removeAsync.fulfilled, (state, action) => {
                state.loading = false
                state.tasks = state.tasks.filter(i => i._id !== action.payload._id)
            })
            .addCase(TaskThunk.removeAsync.rejected, hideLoading)

            // removeAllAsync
            .addCase(TaskThunk.removeAllAsync.pending, showLoading)
            .addCase(TaskThunk.removeAllAsync.fulfilled, (state, action) => {
                state.loading = false
                state.tasks = []
            })
            .addCase(TaskThunk.removeAllAsync.rejected, hideLoading)
    }
})

export const {
    setTask,
} = taskSlice.actions

export default taskSlice.reducer