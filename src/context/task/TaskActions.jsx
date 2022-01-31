import axios from 'axios'

const API_URL = process.env.REACT_APP_TODO_API

const taskAxios = axios.create({
    baseURL: `${API_URL}/api/todos/`
})

const getAll = async () => {
    const response = await taskAxios.get('/')
    return response.data
};

const add = async (task) => {
    const response = await taskAxios.post('/', task, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
};

const update = async (id, task) => {
    const response = await taskAxios.put(`${id}`, task, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
};

const remove = async (id) => {
    const response = await taskAxios.delete(`${id}`)
    return response.data
};

const removeAll = async () => {
    const response = await taskAxios.delete('/')
    return response.data
};

const TaskActions = {
    getAll,
    add,
    update,
    remove,
    removeAll
}

export default TaskActions