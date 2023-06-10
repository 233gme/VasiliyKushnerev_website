import styles from './circleProgress.module.css';
import Button from '@/app/components/Button/Button';

const CircleProgress = ({ value, title, text }) => {
  return (
    <div className={styles.circle}>
      <div className={styles.header}>
        <div className={styles.value}>
          {value}
        </div>
        <svg>
          <circle className={styles.bg} cx="57" cy="57" r="47"></circle>
          <circle className={styles.progress} cx="57" cy="57" r="47"></circle>
        </svg>
        <div className={styles.title}>
          {title}
        </div>
      </div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          {text}
        </p>
        <Button text={'Записаться'} url={'/contact'} type={'secondary'}/>
      </div>
    </div>
  );
};

export default CircleProgress;
