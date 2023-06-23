import styles from './technologyCard.module.css';

const TechnologyCard = ({ text, count }) => {
  return (
    <div className={styles.container}>
      <div className={styles.count}>
        {count}
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default TechnologyCard;
