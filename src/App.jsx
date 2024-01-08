import { useEffect, useState } from "react"
import AddToDoForm from "./components/AddTodoForm"
import SuccessAlert from "./components/SuccessAlert"
import Todos from "./components/Todos"
import Logo from "./assets/images/to-do-list.png"

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

export default function App() {

  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
      <img src={Logo} alt="ToDo List Logo" className="logo"/>
      <AddToDoForm addTodo={addTodo}/>
      <Todos todos={orderTodosByPriority(todos)} deleteTodo={deleteTodo} toggleTodoState={toggleTodoState}/>
    </div>
  )
}
