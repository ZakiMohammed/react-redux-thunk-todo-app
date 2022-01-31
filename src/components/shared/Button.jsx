import PropTypes from 'prop-types'

const Button = ({ children, type, className, handleClick }) => {
    return (
        <button type={type} className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
}

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button
