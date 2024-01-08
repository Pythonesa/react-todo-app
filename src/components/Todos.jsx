import { PropTypes } from "prop-types"
import Todo from "./Todo"

export default function Todos({todos, deleteTodo, toggleTodoState}) {
    return (
        <div className="secondary-container">
            <h2>Lista de tareas</h2>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodoState={toggleTodoState} />
                ))}
                {
                    todos.length === 0 && <p className="todo-item">No hay tareas</p>
                }
            </ul>
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    toggleTodoState: PropTypes.func
}