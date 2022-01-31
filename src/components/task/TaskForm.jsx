import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import Button from '../shared/Button'
import TaskActions from '../../context/task/TaskActions'
import { useSelector, useDispatch } from 'react-redux'
import { add, update } from '../../context/task/TaskSlice'
import { setLoading } from '../../context/spinner/SpinnerSlice'

const TaskForm = () => {

    const [title, setTitle] = useState('')
    const task = useSelector(state => state.task.task)
    const dispatch = useDispatch()

    useEffect(() => {
        if (task) {
            setTitle(task.title)
        }        
    }, [task])

    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            if (title === '') {
                window.alert('Please enter title of your task');
                return;
            }

            dispatch(setLoading(true))

            if (task) {
                const dto = { ...task, title }
                const updatedTask = await TaskActions.update(task._id, dto)

                dispatch(update(updatedTask))
            } else {
                const dto = { title };
                const newTask = await TaskActions.add(dto)

                dispatch(add(newTask))
            }

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
            dispatch(setLoading(false))
            setTitle('')
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter you task"
                value={title}
                onChange={handleTitleChange} />
            <Button type='submit'>
                <FaPlus />
            </Button>
        </form>
    )
}

export default TaskForm
