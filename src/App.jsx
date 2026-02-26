/* Este es el componente principal de la aplicación donde se maneja el estado de las tareas 
y se definen las funciones para agregar, eliminar y marcar tareas como completadas.*/

import './App.css'
import { useState } from 'react'
import Task from './components/Task'
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (newText) => {
    const newTask = {
      id: tasks.length +1,
      text: newText,
      completed: false
    }

    setTasks([...tasks, newTask]) //spread operator
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task)
    ) //!task.completed invierte el valor booleano
  }

  return (
    <div>
      <AddTaskForm addTask={addTask} />

      {tasks.map(task => (<Task key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete}/>))}
    </div>
  ); // key = obligatoria cuando renderizas listas, ha de ser única
  // task = objeto completo de la tarea. {task} es la variable del map. task (izqda) normalment
  //se llama igual que el componente (Task). "task =" tiene que coincidir con el nombre
  //que uses en el componente hijo para leerla
  // deleteTask = le estoy pasando la función para poder borrar la tarea dentro del componente
  //hijo. El componente padre tiene esa función, el hijo puede usarla.
};

export default App;
