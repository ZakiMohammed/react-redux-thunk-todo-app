import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './context/task/TaskSlice'
import spinnerReducer from './context/spinner/SpinnerSlice'

export default configureStore({
    reducer: {
        task: taskReducer,
        spinner: spinnerReducer
    }
})
