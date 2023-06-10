import styles from './about.module.css';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import AboutImg from 'public/images/Konsultaciya-2.png';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={AboutImg}
          alt=""
          className={styles.img}
        />
        <div>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Кто я?</h1>
          <p className={styles.desc}>
            Добрый день, дорогие друзья!
            Спасибо, что заглянули на личный сайт, и я надеюсь, что ВАМ здесь ПОНРАВИТСЯ.
            Давайте познакомимся!
            Меня зовут Василий Кушнерев, я профессиональный психолог, коуч, НЛП-мастер-тренер,
            который уже более 12-и лет оказывает психотерапевтическую помощь и услуги для мужчин
            и женщин, а также работает с различными проблемами в рамках Нейролингвистического
            Программирования
            <br/>
            <br/>
            Началом занятия психологией и саморазвитием является 2005 год, когда я начал обучение в
            программе подготовки гештальт-терапевтов МГИ
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Чем я занимаюсь?</h1>
          <p className={styles.desc}>
            В настоящее время веду терапевтические группы, Бизнес-тренинги, тренинги НЛП и личностного
            роста, провожу психологические очные и онлайн консультации (анонимно). Частный прием веду
            как дистанционно (удаленно), так и территориально — города Москва.
            <br/>
            В работе с клиентами использую глубокую научную основу, сочетающую простой прагматичный,
            индивидуальный подход.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Немного об официальном образовании.</h1>
          <p className={styles.desc}>
            БГПУ им. М. Танка 2006 — 2011 Специальность
            «Психология семейных отношений. Семейный психолог»
            <br/>
            <br/>
            Московский Гештальт Институт (МГИ) 2005 — 2008 Теория и практика Гештальт-терапии
            <br/>
            <br/>
            Международная Ассоциация Тренеров и Коучей
            (International Coach and Trainer Association, ICTA)
            Тренер NLP, 2014 г.
            <br/>
            <br/>
            Международная Ассоциация Тренеров и Коучей
            (International Coach and Trainer Association, ICTA)
            Бизнес-тренер, 2014 г.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
