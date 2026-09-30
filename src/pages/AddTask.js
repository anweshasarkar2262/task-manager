import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const AddTask = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    header: '',
    description: '',
    priority: 'Low',
    category: 'Academic',
    dueDate: '2026-08-28',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.header.trim()) return;
    addTask(form);
    navigate('/tasks');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={{ color: '#1F2937', marginTop: 0 }}>Create New Task</h2>
        <input
          type="text"
          placeholder="Task Header"
          value={form.header}
          onChange={(e) => setForm({ ...form, header: e.target.value })}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Task Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          style={{ ...styles.input, height: '80px' }}
        />
        <div style={styles.row}>
          <label style={{ flex: 1 }}>
            Priority:
            <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} style={styles.input}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
          <label style={{ flex: 1 }}>
            Category:
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={styles.input}>
              <option value="Academic">Academic</option>
              <option value="Personal">Personal</option>
            </select>
          </label>
        </div>
        <label>
          Due Date:
          <input
            type="date"
            value={form.dueDate}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.submitBtn}>Create Task</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: '2rem', display: 'flex', justifyContent: 'center', fontFamily: 'Segoe UI, sans-serif' },
  form: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    width: '100%',
    maxWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.6rem',
    borderRadius: '6px',
    border: '1px solid #D1D5DB',
    marginTop: '0.3rem',
    boxSizing: 'border-box',
  },
  row: { display: 'flex', gap: '1rem' },
  submitBtn: {
    backgroundColor: '#4F46E5',
    color: '#fff',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default AddTask;