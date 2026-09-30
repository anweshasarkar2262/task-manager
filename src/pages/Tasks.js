import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const Tasks = () => {
  const { tasks, updateTaskStatus, deleteTask } = useTasks();
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredTasks = tasks.filter((t) => {
    const pMatch = priorityFilter === 'All' || t.priority === priorityFilter;
    const cMatch = categoryFilter === 'All' || t.category === categoryFilter;
    return pMatch && cMatch;
  });

  const getPriorityBadge = (p) => {
    const colors = { High: '#FEE2E2', Medium: '#FEF3C7', Low: '#E0E7FF' };
    const textColors = { High: '#991B1B', Medium: '#92400E', Low: '#3730A3' };
    return {
      backgroundColor: colors[p] || '#eee',
      color: textColors[p] || '#333',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    };
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#1F2937' }}>Tasks Management</h2>
      
      {/* Filters */}
      <div style={styles.filterBox}>
        <label>
          Priority:{' '}
          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} style={styles.select}>
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label>
          Category:{' '}
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} style={styles.select}>
            <option value="All">All</option>
            <option value="Academic">Academic</option>
            <option value="Personal">Personal</option>
          </select>
        </label>
      </div>

      {/* Task List */}
      <div style={styles.list}>
        {filteredTasks.map((t) => (
          <div key={t.id} style={styles.card}>
            <div>
              <Link to={`/tasks/${t.id}`} style={styles.title}>{t.header}</Link>
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={getPriorityBadge(t.priority)}>{t.priority}</span>
                <span style={styles.categoryBadge}>{t.category}</span>
                <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Status: {t.status}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => updateTaskStatus(t.id, 'Closed')} style={styles.completeBtn}>Close</button>
              <button onClick={() => deleteTask(t.id)} style={styles.deleteBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '2rem', fontFamily: 'Segoe UI, sans-serif' },
  filterBox: { display: 'flex', gap: '1rem', marginBottom: '1.5rem', backgroundColor: '#fff', padding: '1rem', borderRadius: '8px' },
  select: { padding: '0.4rem', borderRadius: '4px', border: '1px solid #D1D5DB' },
  list: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  card: {
    backgroundColor: '#fff',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  title: { textDecoration: 'none', color: '#1F2937', fontWeight: 'bold', fontSize: '1.1rem' },
  categoryBadge: { backgroundColor: '#F3F4F6', color: '#4B5563', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem' },
  completeBtn: { backgroundColor: '#10B981', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' },
  deleteBtn: { backgroundColor: '#EF4444', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' },
};

export default Tasks;