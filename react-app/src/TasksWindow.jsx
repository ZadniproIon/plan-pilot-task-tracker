import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheckSquare, faSquare } from "@fortawesome/free-solid-svg-icons";
//import {  } from "@fortawesome/free-regular-svg-icons";

import './TasksWindow.css';

// @fortawesome
// @fortawesome

export default function TasksWindow() {
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage on first render
    useEffect(() => {
        const savedTasks = localStorage.getItem('planpilot-tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save to localStorage on tasks change
    useEffect(() => {
        localStorage.setItem('planpilot-tasks', JSON.stringify(tasks));
    }, [tasks]);

    const toggleDone = (id) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    return (
        <div id='taskswindow'>
            {tasks.map(task => (
                <div
                    className={`task-card ${task.done ? 'task-done' : ''}`}
                    key={task.id}
                >
                    <button className="check-btn" onClick={() => toggleDone(task.id)}>
                        <FontAwesomeIcon icon={task.done ? faCheckSquare : faSquare} />
                    </button>

                    <span className="task-text">{task.text}</span>

                    <span className={`priority ${task.priority}`}>
                        {task.priority}
                    </span>

                    <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            ))}
        </div>
    );
}
