// Este componente proporciona un formulario para agregar nuevas tareas a la lista.

import React, {useState} from 'react'

const AddTaskForm = ({addTask}) => {
    const [inputValue, setInputValue ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() //evita que la página se recargue
        if (inputValue.trim() === '') return //no añade tareas vacías
        addTask(inputValue) //llama a la función de App
        setInputValue('') // limpia el input
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputValue} //para que sirve? preguntar en class
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Escribe una nueva tarea'
             />
             <button type='submit'>Añadir</button>
        </form>
    )
}

export default AddTaskForm