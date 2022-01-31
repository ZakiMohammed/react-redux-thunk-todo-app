import { FaFrown } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const TaskEmpty = () => {

    const tasks = useSelector(state => state.task.tasks)

    return (
        tasks.length === 0 && (
            <div className='empty'>
                <FaFrown size={30} />
                Nothing added to the list
            </div>
        )
    )
}

export default TaskEmpty
