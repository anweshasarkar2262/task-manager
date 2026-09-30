import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const CompletedTasks = () => {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter((t) => t.status === 'Closed');

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <ul>
          {completedTasks.map((t) => (
            <li key={t.id}>
              <Link to={`/tasks/${t.id}`}>{t.header}</Link> — Closed
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTasks;