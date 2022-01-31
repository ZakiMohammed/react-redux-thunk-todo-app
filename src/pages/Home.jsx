import TaskList from '../components/task/TaskList'
import TaskForm from '../components/task/TaskForm'
import TaskEmpty from '../components/task/TaskEmpty'
import TaskClear from '../components/task/TaskClear'

const Home = () => {

    return (
        <>
            <TaskForm />
            <TaskClear />
            <TaskList />
            <TaskEmpty />
        </>
    )
}

export default Home
