import styles from './page.module.css';
import Button from '@/app/components/Button/Button';

const NotFound = () => {
  return (
    <div className={styles.not_found_container}>
      <h2> 😵‍💫 Ой! Ошибка!</h2>
      <Button
        url={'/'}
        text={'ВЕРНУТЬСЯ НА ГЛАВНУЮ'}
        type={'secondary'}/>
    </div>
  );
};

export default NotFound;
