import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

const initialTasks = [
  {
    id: '1',
    header: 'Submit Assignment 6',
    description: 'Complete Task Manager React Router app',
    priority: 'High',
    category: 'Academic',
    raisedDateTime: new Date().toLocaleString(),
    dueDate: '2026-08-28',
    status: 'Pending',
  },
];

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    const taskWithMeta = {
      ...newTask,
      id: Date.now().toString(),
      raisedDateTime: new Date().toLocaleString(),
      status: 'Raised',
    };
    setTasks((prev) => [...prev, taskWithMeta]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);