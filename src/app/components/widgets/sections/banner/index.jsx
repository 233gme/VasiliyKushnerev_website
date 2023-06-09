import styles from './banner.module.css';
import Image from 'next/image';
import VasiliyKushnerev
  from '../../../../../../public/images/Konsultaciya-chastnogo-onlajn-psihologa.webp';
import { statsData } from '@/app/components/shared/lib/const/stats.data';
import StatsCard from 'src/app/components/shared/ui/StatsCard';
import Form from 'src/app/components/shared/ui/Form';

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Основы Нейролингвистического Программирования
          (НЛП в Психологии)
        </h1>
        <div className={styles.block}>
          <h2 className={styles.subtitle}>
            Консультации с психологом онлайн
          </h2>
          <p className={styles.desc}>
            Попробуй Бесплатную Личную Консультацию (30мин)!
          </p>
          <div className={styles.form}>
            <Form/>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <Image
          src={VasiliyKushnerev}
          alt={'Vasiliy Kushnerev'}
          className={styles.img}/>
        <span className={styles.line}></span>
        <div className={styles.stats}>
          {
            statsData.map(({ img, num, text }) => {
              return (
                <StatsCard
                  key={img}
                  img={img}
                  title={num}
                  text={text}
                  alt={text}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Banner;
