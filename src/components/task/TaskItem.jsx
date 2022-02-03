import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import Button from '../shared/Button'
import Card from '../shared/Card';
import { useDispatch } from 'react-redux'
import { setTask } from '../../context/task/TaskSlice'
import TaskThunk from '../../context/task/TaskThunk';

const TaskItem = ({ task }) => {

    const dispatch = useDispatch()

    const handleRemoveTask = async (e) => {
        try {
            dispatch(TaskThunk.removeAsync(task))
        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
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
