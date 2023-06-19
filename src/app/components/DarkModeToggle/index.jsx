import styles from './darkModeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const DarkModeToggle = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

export default DarkModeToggle;
