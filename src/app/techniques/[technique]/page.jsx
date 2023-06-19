import styles from './technique.module.css';

const Technique = ({ params }) => {
  return (
    <div className={styles.container}>
      <span className={styles.subtitle}>НЛП</span>
      <h1 className={styles.title}>Основные техники НЛП</h1>
      <section>
        Techniques
      </section>
    </div>
  );
};

export default Technique;
