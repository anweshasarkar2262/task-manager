import React from 'react';
import { useParams, useNavigate } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTaskStatus, deleteTask } = useTasks();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <p style={{ padding: '1rem' }}>Task not found!</p>;
  }

  const handleDelete = () => {
    deleteTask(task.id);
    navigate('/tasks');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{task.header}</h2>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Category:</strong> {task.category}</p>
      <p><strong>Raised Date & Time:</strong> {task.raisedDateTime}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <p><strong>Status:</strong> {task.status}</p>

      <button onClick={() => updateTaskStatus(task.id, 'Pending')}>Set Pending</button>
      <button onClick={() => updateTaskStatus(task.id, 'Closed')}>Set Closed</button>
      <button onClick={handleDelete}>Delete Task</button>
      <br /><br />
      <button onClick={() => navigate('/tasks')}>Back to Tasks</button>
    </div>
  );
};

export default TaskDetails;