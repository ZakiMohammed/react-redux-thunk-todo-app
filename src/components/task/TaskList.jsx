import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskItem from './TaskItem'
import TaskActions from '../../context/task/TaskActions'
import { getAll } from '../../context/task/TaskSlice'
import { setLoading } from '../../context/spinner/SpinnerSlice'

const TaskList = () => {

    const tasks = useSelector(state => state.task.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        const getTasks = async () => {
            try {
                dispatch(setLoading(true))

                const data = await TaskActions.getAll()

                dispatch(getAll(data))

            } catch (error) {
                console.log(`Error Occurred: ${error.message}`)
            } finally {
                dispatch(setLoading(false))
            }
        }

        getTasks()

    }, [dispatch])

    return (
        <div className='card-holder'>
            {tasks && tasks.map(task => (
                <TaskItem key={task._id} task={task} />
            ))}
        </div>
    )
}

export default TaskList
