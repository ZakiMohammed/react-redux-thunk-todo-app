import { FaTrashAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../shared/Button'
import TaskThunk from '../../context/task/TaskThunk';

const TaskClear = () => {

    const tasks = useSelector(state => state.task.tasks)
    const dispatch = useDispatch()

    const handleRemoveTask = async (e) => {
        try {
            if (!window.confirm('Are you sure you want to remove all the tasks?')) {
                return;
            }

            dispatch(TaskThunk.removeAllAsync())

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        }
    }

    return (
        (tasks && tasks.length !== 0) && (
            <>
                <Button className='btn-clear' handleClick={handleRemoveTask}>
                    <FaTrashAlt /> Clear All
                </Button>
            </>
        )
    )
}

export default TaskClear
