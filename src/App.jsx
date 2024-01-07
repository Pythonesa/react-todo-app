import AddToDoForm from "./components/AddTodoForm"
import Todos from "./components/Todos"
import { useState } from "react"

const initialStateTodos = [
  {id: 1, name: "Todo 1", description: "Todo 1 description", state: "Terminada", priority: false},
  {id: 2, name: "Todo 2", description: "Todo 2 description", state: "Pendiente", priority: false},
  {id: 3, name: "Todo 3", description: "Todo 3 description", state: "Pendiente", priority: true},
]

export default function App() {

  const [todos, setTodos] = useState(initialStateTodos)

  return (
    <div className="container">
      <img src="/src/assets/images/to-do-list.png" alt="ToDo List Logo" className="logo"/>
      <AddToDoForm/>
      <Todos todos={todos}/>
    </div>
  )
}
