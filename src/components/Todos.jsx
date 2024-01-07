import { PropTypes } from "prop-types"

export default function Todos({todos}) {
    return (
        <div className="secondary-container">
            <h2>Lista de tareas</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.array
}