import PropTypes from 'prop-types'

export default function Todo({todo, deleteTodo, toggleTodoState}) {
    const { id, name, description, state, priority } = todo
    return (
        <li className='todo-item'>
            <h3 className={state && 'done'}>{name}</h3>
            <p className={priority || 'text'}>{description}</p>
            <div className='buttons-container'>
                <button onClick={() => toggleTodoState(id)} className='button control todo-button'>Cambiar estado</button>
                <button onClick={() => deleteTodo(id)} className='button control todo-button'>Eliminar</button>
            </div>
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    toggleTodoState: PropTypes.func
}