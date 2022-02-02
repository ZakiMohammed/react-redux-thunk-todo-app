import { FaTrashAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../shared/Button'
import TaskServices from '../../context/task/TaskServices'
import { removeAll, setLoading } from '../../context/task/TaskSlice'

const TaskClear = () => {

    const tasks = useSelector(state => state.task.tasks)
    const dispatch = useDispatch()

    const handleRemoveTask = async (e) => {
        try {
            if (!window.confirm('Are you sure you want to remove all the tasks?')) {
                return;
            }

            dispatch(setLoading(true))

            await TaskServices.removeAll()

            dispatch(removeAll())

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
            dispatch(setLoading(false))
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
