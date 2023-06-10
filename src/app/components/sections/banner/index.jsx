import styles from './banner.module.css';
import Link from 'next/link';
import Image from 'next/image';
import VasiliyKushnerev
  from 'public/images/Konsultaciya-chastnogo-onlajn-psihologa.webp';
import { statsData } from '@/app/components/lib/const/stats.data';
import StatsCard from '@/app/components/StatsCard';

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
          <form
            // onSubmit={handelSubmit}
            className={styles.form}
          >
            <input
              type="text"
              placeholder="Ваше имя:"
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Ваш e-mail:"
              required
              className={styles.input}
            />
            <button className={styles.button}>
              Записаться
            </button>
            <span className={styles.privacy}>
              Нажимая на кнопку, вы соглашаетесь с политикой
              <Link href={'/privacy_policy'} className={styles.privacy_link}>
                {` ${'конфиденциальности'}`}
              </Link>
            </span>
          </form>
        </div>
        {/*<Button url="/portfolio" text="See Our Works"/>*/}
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
