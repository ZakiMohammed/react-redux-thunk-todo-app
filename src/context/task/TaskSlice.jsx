import { createSlice } from '@reduxjs/toolkit'
import TaskThunk from './TaskThunk'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: null,
        tasks: [],
        loading: false
    },
    reducers: {
        remove: (state, action) => {
            state.tasks = state.tasks.filter(i => i._id !== action.payload._id)
        },
        removeAll: (state, action) => {
            state.tasks = []
        },
        setTask: (state, action) => {
            state.task = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // getAllAsync
            .addCase(TaskThunk.getAllAsync.pending, (state, action) => {
                state.loading = true
            })
            .addCase(TaskThunk.getAllAsync.fulfilled, (state, action) => {
                state.loading = false
                state.tasks = action.payload
            })
            .addCase(TaskThunk.getAllAsync.rejected, (state, action) => {
                state.loading = false
                state.tasks = []
            })

            // addAsync
            .addCase(TaskThunk.addAsync.pending, (state, action) => {
                state.loading = true
            })
            .addCase(TaskThunk.addAsync.fulfilled, (state, action) => {
                state.loading = false
                state.tasks = [action.payload, ...state.tasks]
            })
            .addCase(TaskThunk.addAsync.rejected, (state, action) => {
                state.loading = false
            })

            // updateAsync
            .addCase(TaskThunk.updateAsync.pending, (state, action) => {
                state.loading = true
            })
            .addCase(TaskThunk.updateAsync.fulfilled, (state, action) => {
                state.loading = false
                state.task = null
                state.tasks = state.tasks.map(i => i._id === action.payload._id ? i = action.payload : i)
            })
            .addCase(TaskThunk.updateAsync.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export const {
    remove,
    removeAll,
    setTask,
    setLoading
} = taskSlice.actions

export default taskSlice.reducer