import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import Button from '../shared/Button'
import { useSelector, useDispatch } from 'react-redux'
import TaskThunk from '../../context/task/TaskThunk'

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

            if (task) {
                const dto = { ...task, title }
                dispatch(TaskThunk.updateAsync(dto))
            } else {
                const dto = { title };
                dispatch(TaskThunk.addAsync(dto))
            }

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
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
