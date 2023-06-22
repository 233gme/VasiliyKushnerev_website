import styles from './techniques.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Техниики НЛП - Официальный сайт Василия Кушнерева',
  description: 'Личный сайт Василия Кушнерева. ' +
    'Провожу онлайн консультации дистанционно и в городе Москва. ' +
    'Если нужен частный, профессиональный, взрослый НЛП психолог, ' +
    'первая консультация бесплатно'
};

const Techniques = () => {
  return (
    <div className={styles.container}>
      <span className={styles.subtitle}>НЛП</span>
      <h1 className={styles.title}>Основные техники</h1>
      <article className={styles.desc}>
        <p>
          Перед вами справочник по основным техникам НЛП, которые помогут
          изменить ваше внутреннее восприятие этого мира, а, следовательно,
          сделать вашу жизнь лучше. Данные техники НЛП – это поистине настоящая
          «магия». Магия в том смысле, что, применяя их, вы получите поистине
          волшебные эффекты. Ведь техники НЛП работают со структурой нашего
          внутреннего опыта. А изменяя структуру – мы меняем нашу жизнь.
        </p>
        <p>
          В этом разделе техники НЛП описываются не столько как теоретический, а
          прежде всего практический подход по трансформации собственных
          ограничений. И прежде чем вы начнете практиковать в полной мере
          данные техники, вы можете испытать на себе и других каждую по
          отдельности.
        </p>
        <p>
          Погрузившись при этом в удивительный мир НЛП!
        </p>
      </article>
      <section className={styles.content}>
        <div className={styles.items}>
          <Link href="/techniques/collapse_of_anchors" className={styles.item1}>
            <span className={styles.item_title}>Коллапс якорей</span>
          </Link>
          <Link href="/techniques/anchoring" className={styles.item1}>
            <span className={styles.item_title}>Якорение</span>
          </Link>
          <Link href="/techniques/liberation_from_codependency"
            className={styles.item1}>
            <span className={styles.item_title}>
              Освобождение от созависимости
            </span>
          </Link>
        </div>
        <div className={styles.items}>
          <Link href="/techniques/reimprinting" className={styles.item2}>
            <span className={styles.item_title}>Реимпринтинг</span>
          </Link>
          <Link href="/techniques/three_position_description"
            className={styles.item2}>
            <span className={styles.item_title}>Трехпозиционное Описание</span>
          </Link>
          <Link href="/techniques/self_love" className={styles.item2}>
            <span className={styles.item_title}>Любовь к Себе</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Techniques;
