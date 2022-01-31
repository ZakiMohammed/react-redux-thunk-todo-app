import { NavLink } from 'react-router-dom'
import Card from '../components/shared/Card'

const About = () => {
    return (
        <>
            <Card>
                <h4>About</h4>
                <p>Todo Application using React. ❤️</p>
            </Card>
            <NavLink className='btn-back' to={'/'}>Go Back</NavLink>
        </>
    )
}

export default About
