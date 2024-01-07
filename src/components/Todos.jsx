import { PropTypes } from "prop-types"
import Todo from "./Todo"

export default function Todos({todos}) {
    return (
        <div className="secondary-container">
            <h2>Lista de tareas</h2>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.array
}