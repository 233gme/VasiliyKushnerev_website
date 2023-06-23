import styles from './howItWorks.module.css';
import Form from 'src/app/components/shared/ui/Form';

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
          <div className={styles.how_it_works_text_header}>
            <p>На самом деле, НЛП методы очень просты,<br/>
              и освоить их может каждый!</p>
            <p>А результаты — просто потрясающие!</p>
          </div>
          <p>Нужен РЕЗУЛЬТАТ?</p>
          <p>Попробуй личную бесплатную онлайн консультацию!</p>
          <p>Запись по телефону или телеграмму:</p>
          <div className={styles.tel_block}>
            <span className={styles.tel}>+7(929) 694-90-11</span>
            <span className={styles.tel}>@VasiliyKushnerev</span>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
