import React from 'react';
import { useTasks } from '../context/TaskContext';

const Dashboard = () => {
  const { tasks } = useTasks();

  const total = tasks.length;
  const highPriority = tasks.filter((t) => t.priority === 'High').length;
  const pending = tasks.filter((t) => t.status !== 'Closed').length;
  const closed = tasks.filter((t) => t.status === 'Closed').length;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard Overview</h1>
      <div style={styles.grid}>
        <div style={{ ...styles.card, borderLeft: '4px solid #4F46E5' }}>
          <h3>Total Tasks</h3>
          <p style={styles.num}>{total}</p>
        </div>
        <div style={{ ...styles.card, borderLeft: '4px solid #EF4444' }}>
          <h3>High Priority</h3>
          <p style={styles.num}>{highPriority}</p>
        </div>
        <div style={{ ...styles.card, borderLeft: '4px solid #F59E0B' }}>
          <h3>Pending</h3>
          <p style={styles.num}>{pending}</p>
        </div>
        <div style={{ ...styles.card, borderLeft: '4px solid #10B981' }}>
          <h3>Completed</h3>
          <p style={styles.num}>{closed}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '2rem', fontFamily: 'Segoe UI, sans-serif' },
  heading: { color: '#1F2937', marginBottom: '1.5rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  num: { fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0 0', color: '#111827' },
};

export default Dashboard;