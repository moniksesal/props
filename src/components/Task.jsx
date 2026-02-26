// Este componente muestra una tarea individual y maneja los eventos de clic en la tarea.

import React from 'react'

const Task = ({task, deleteTask, toggleComplete}) => {
    return (
        <div>
            <span 
                onClick={() => toggleComplete(task.id)}
                style={{textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer'}}
            >
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Borrar</button>
        </div>
    )
}

export default Task