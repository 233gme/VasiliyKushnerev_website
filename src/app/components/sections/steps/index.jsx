import styles from './steps.module.css';

import {
  technologyCards
} from '@/app/components/lib/const/technologyCards.data';
import TechnologyCard from '@/app/components/TechnologyCard';

const Steps = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Хотели бы Применять Технологию НЛП?</h3>
      <div className={styles.technology_cards}>
        {
          technologyCards.map(({ text, count }) => {
            return (
              <TechnologyCard
                key={count}
                text={text.toLowerCase()}
                count={count}/>
            );
          })
        }
      </div>
    </section>
  );
};

export default Steps;
