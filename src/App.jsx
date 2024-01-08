import AddToDoForm from "./components/AddTodoForm"
import SuccessAlert from "./components/SuccessAlert"
import Todos from "./components/Todos"
import { useState } from "react"

const initialStateTodos = [
  {id: 1, name: "Todo 1", description: "Todo 1 description", state: true, priority: false},
  {id: 2, name: "Todo 2", description: "Todo 2 description", state: false, priority: false},
  {id: 3, name: "Todo 3", description: "Todo 3 description", state: true, priority: true},
]

export default function App() {

  const [todos, setTodos] = useState(initialStateTodos)

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    SuccessAlert({title: "¡Tarea eliminada!"})
  }

  const toggleTodoState = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.state ? SuccessAlert({title: "Estado cambiado a 'Pendiente'"}) : SuccessAlert({title: "Estado cambiado a 'Terminada'"})
        return {
          ...todo,
          state: !todo.state
        }
      }
      return todo
    }))
  }

  const orderTodosByPriority = (todos) => {
    return todos.sort((a, b) => {
      if (a.priority && !b.priority) {
        return -1
      }
      if (!a.priority && b.priority) {
        return 1
      }
      return 0
    })
  }

  return (
    <div className="container">
      <img src="/src/assets/images/to-do-list.png" alt="ToDo List Logo" className="logo"/>
      <AddToDoForm addTodo={addTodo}/>
      <Todos todos={orderTodosByPriority(todos)} deleteTodo={deleteTodo} toggleTodoState={toggleTodoState}/>
    </div>
  )
}
