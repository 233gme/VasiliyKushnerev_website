import styles from './statsCard.module.css';
import Image from 'next/image';

const StatsCard = ({ img, alt = '', title, text }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.img}>
        <Image src={img} alt={alt}/>
      </figure>
      <article className={styles.desc}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </article>
    </div>
  );
};

export default StatsCard;
