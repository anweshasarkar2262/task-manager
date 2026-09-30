
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>TaskFlow</div>
      <div style={styles.links}>
        <NavLink to="/" style={styles.link} className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink>
        <NavLink to="/tasks" style={styles.link}>Tasks</NavLink>
        <NavLink to="/add-task" style={styles.link}>+ Add Task</NavLink>
        <NavLink to="/completed" style={styles.link}>Completed</NavLink>
      </div>
      <button onClick={isAuthenticated ? logout : login} style={styles.authBtn}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  brand: { fontSize: '1.4rem', fontWeight: 'bold', color: '#4F46E5' },
  links: { display: 'flex', gap: '1.5rem' },
  link: { textDecoration: 'none', color: '#4B5563', fontWeight: '500' },
  authBtn: {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#4F46E5',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default Navbar;