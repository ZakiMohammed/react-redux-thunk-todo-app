import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskItem from './TaskItem'
import { getAllAsync } from '../../context/task/TaskThunk'

const TaskList = () => {

    const tasks = useSelector(state => state.task.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        const getTasks = async () => {
            dispatch(getAllAsync())
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
