import { createAsyncThunk } from '@reduxjs/toolkit'
import TaskServices from './TaskServices'

export const getAllAsync = createAsyncThunk(
    'task/getAllAsync',
    async () => {
        return await TaskServices.getAll()
    }
)

export const addAsync = createAsyncThunk(
    'task/addAsync',
    async (task) => {
        return await TaskServices.add(task)
    }
)

export const updateAsync = createAsyncThunk(
    'task/updateAsync',
    async (task) => {
        return await TaskServices.update(task._id, task)
    }
)

const TaskThunk = {
    getAllAsync,
    addAsync,
    updateAsync,
}

export default TaskThunk