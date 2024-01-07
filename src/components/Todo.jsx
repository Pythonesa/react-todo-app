import PropTypes from 'prop-types'

export default function Todo({todo}) {
    const { name, description, state, priority } = todo
    return (
        <li className='todo-item'>
            <h3 className={state && 'done'}>{name}</h3>
            <p className={priority || 'text'}>{description}</p>
            <div className='buttons-container'>
                <button className='button control todo-button'>Actualizar</button>
                <button className='button control todo-button'>Eliminar</button>
            </div>
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.object
}