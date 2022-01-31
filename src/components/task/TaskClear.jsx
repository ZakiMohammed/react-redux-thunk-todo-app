import { FaTrashAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../shared/Button'
import TaskActions from '../../context/task/TaskActions'
import { removeAll } from '../../context/task/TaskSlice'
import { setLoading } from '../../context/spinner/SpinnerSlice'

const TaskClear = () => {

    const tasks = useSelector(state => state.task.tasks)
    const dispatch = useDispatch()

    const handleRemoveTask = async (e) => {
        try {
            if (!window.confirm('Are you sure you want to remove all the tasks?')) {
                return;
            }

            dispatch(setLoading(true))

            await TaskActions.removeAll()

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
