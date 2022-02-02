import { FaSpinner } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Spinner = () => {

    const loading = useSelector(state => state.task.loading)

    return (
        loading &&
        <div className='loader'>
            <div>
                <FaSpinner size={60} className='' />
            </div>
        </div>
    )
}

export default Spinner
