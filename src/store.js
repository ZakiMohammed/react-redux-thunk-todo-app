import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './context/task/TaskSlice'

export default configureStore({
    reducer: {
        task: taskReducer,
    }
})
