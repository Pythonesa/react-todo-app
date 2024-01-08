import {useState} from 'react'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import SuccessAlert from './SuccessAlert'

export default function AddToDoForm({addTodo}) {
    const [todo, setTodo] = useState({
        todoName: '',
        todoDescription: '',
        todoState: 'Pendiente',
        todoPriority: true
    })


    const {todoName, todoDescription, todoState, todoPriority} = todo

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todoName.trim() || !todoDescription.trim()) {
            Swal.fire({
                icon: 'error',
                iconColor : '#FFCE0B',
                title: 'Todos los campos son obligatorios',
                background: '#AC00BD',
                color: '#FFCE0B',
                confirmButtonColor: '#093F41'
            })
            return
        }

        addTodo({
            id: Date.now(),
            name: todoName,
            description: todoDescription,
            state: todoState === "Terminada",
            priority: todoPriority
        })
        SuccessAlert({title: "¡Tarea añadida!"})
        setTodo({
            todoName: '',
            todoDescription: '',
            todoState: 'Pendiente',
            todoPriority: true
        });
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

AddToDoForm.propTypes = {
    addTodo: PropTypes.func
}