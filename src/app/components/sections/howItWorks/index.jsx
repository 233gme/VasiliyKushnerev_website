import styles from './howItWorks.module.css';

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <span className={styles.subtitle}>Как всё работает?</span>
      <h3 className={styles.title}>С чем работает технология НЛП</h3>
      <div className={styles.block}>
        <div className={styles.how_it_works_deck}>
          <p>Моделирование успешных стратегий поведения</p>
          <p>Изменение убеждений и улучшение коммуникации</p>
          <p>Проработка детских травм и негативных импринтов</p>
          <p>Изменение негативных состояний в желательные</p>
          <p>Постановка личных целей и достижение результатов</p>
        </div>
        <div className={styles.how_it_works_text}>
          На самом деле, НЛП методы очень просты, и освоить их может каждый!
          А результаты — просто потрясающие!
          Нужен РЕЗУЛЬТАТ?
          Попробуй личную бесплатную онлайн консультацию!
          Запись по телефону или телеграмму:
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
