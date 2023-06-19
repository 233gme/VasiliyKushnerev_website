import Link from 'next/link';
import styles from './page.module.css';

const NotFound = () => {
  return (
    <div className={styles.not_found_container}>
      <h1> 😵‍💫 Ой! Такого нет, но скоро исправим!</h1>
      <div>
        <Link href="/">👉 нажмите суда чтобы вернуться 👈</Link>
      </div>
    </div>
  );
};

export default NotFound;
