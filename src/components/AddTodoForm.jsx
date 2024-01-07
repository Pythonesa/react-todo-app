import {useState} from 'react'

export default function AddToDoForm() {
    const [todo, setTodo] = useState({
        todoName: '',
        todoDescription: '',
        todoState: 'Pendiente',
        todoPriority: true
    })

    const [error, setError] = useState(false)

    const {todoName, todoDescription, todoState, todoPriority} = todo
    const ShowError = () => <div className="alert-danger">Todos los campos son obligatorios</div>

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todoName.trim() || !todoDescription.trim() || !todoState.trim()) return setError(true)
        setError(false)
    }


    function handleOnChange(event) {
        const {name, value, type, checked} = event.target
        setTodo(structuredClone({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    return (
        <div className="secondary-container">
            <h2>Añadir nueva tarea</h2>
            {error && <ShowError />}
            <form onSubmit={handleSubmit}>
                <input 
                    className="control"
                    type="text" 
                    placeholder="Ingrese el nombre de la tarea" 
                    name="todoName"
                    value={todoName}
                    onChange={handleOnChange}
                />
                <textarea 
                    type="text" 
                    className="control"
                    placeholder="Ingrese la descripción de la tarea" 
                    name="todoDescription"
                    value={todoDescription}
                    onChange={handleOnChange}
                />
                <select 
                    className="control"
                    name="todoState" 
                    value={todoState}
                    onChange={handleOnChange}
                >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Terminada">Terminada</option>
                </select>
                <div className="control">
                    <input
                        type='checkbox'
                        name="todoPriority"
                        id="todoPriority"
                        onChange={handleOnChange}
                        checked={todoPriority}
                    />
                    <label htmlFor="todoPriority">Tarea prioritaria</label>
                </div>
                <button type="submit" className="control button">Añadir tarea</button>
            </form>
        </div>
    )
}