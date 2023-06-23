import styles from './practice.module.css';

import { cards } from '@/app/components/shared/lib/const/practiceCards.data';
import PracticeCard from 'src/app/components/shared/ui/PracticeCard';

const Practice = () => {
  return (
    <section className={styles.container}>
      <span className={styles.subtitle}>Зачем?</span>
      <h3 className={styles.title}>Что даст вам практика НЛП</h3>
      <div className={styles.cards}>
        {
          cards.map(({ title, text, img, alt }) => {
            return (
              <PracticeCard
                key={title}
                img={img}
                alt={alt}
                title={title}
                text={text}
              />
            );
          })
        }
      </div>
    </section>
  );
};

export default Practice;
