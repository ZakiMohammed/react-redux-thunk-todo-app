import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: null,
        tasks: [],
        loading: false
    },
    reducers: {
        getAll: (state, action) => {
            state.tasks = action.payload
        },
        add: (state, action) => {
            state.tasks = [action.payload, ...state.tasks]
        },
        update: (state, action) => {
            state.task = null
            state.tasks = state.tasks.map(i => i._id === action.payload._id ? i = action.payload : i)
        },
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
    }
})

export const {
    getAll,
    add,
    update,
    remove,
    removeAll,
    setTask,
    setLoading
} = taskSlice.actions

export default taskSlice.reducer