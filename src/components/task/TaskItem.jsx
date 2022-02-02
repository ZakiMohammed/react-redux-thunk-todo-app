import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import Button from '../shared/Button'
import TaskServices from '../../context/task/TaskServices';
import Card from '../shared/Card';
import { useDispatch } from 'react-redux'
import { remove, setTask, setLoading } from '../../context/task/TaskSlice'

const TaskItem = ({ task }) => {

    const dispatch = useDispatch()

    const handleRemoveTask = async (e) => {
        try {
            dispatch(setLoading(true))

            await TaskServices.remove(task._id)

            dispatch(remove(task))

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
            dispatch(setLoading(false))
        }
    }
    const handleEditTask = (e) => {
        dispatch(setTask(task))
    }

    return (
        <Card>
            <Button className='btn-remove' handleClick={handleRemoveTask}>
                <FaTimes />
            </Button>
            <Button className='btn-edit' handleClick={handleEditTask}>
                <FaPencilAlt />
            </Button>
            <p>{task.title}</p>
        </Card>
    )
}

export default TaskItem
