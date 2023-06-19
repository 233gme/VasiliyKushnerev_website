'use client';
import styles from './about.module.css';
import Image from 'next/image';
import aboutImg from 'public/images/Konsultaciya-2.png';
import first from 'public/diplomas/1.webp';
import second from 'public/diplomas/2.webp';
import third from 'public/diplomas/3.webp';
import fourth from 'public/diplomas/4.webp';
import { useState } from 'react';

const About = () => {
  const [showBlock, setShowBlock] = useState(false);
  const [image, setImage] = useState('');

  const handleOpen = (item) => () => {
    setImage(item);
    setShowBlock(true);
  };

  const handleClose = () => {
    setImage('');
    setShowBlock(false);
  };

  return (
    <div className={styles.container}>
      <div
        onClick={handleClose}
        className={showBlock ? styles.full : styles.do_not_show}
      >
        {
          image ? <Image src={image} alt="diploma" fill/> : null
        }
      </div>
      <span className={styles.container_subtitle}>Обо мне</span>
      <h1 className={styles.container_title}>Давайте знакомится!</h1>
      <section className={styles.about_container}>
        <aside className={styles.img_container}>
          <Image
            src={aboutImg}
            alt="VasiliyKushnerev"
            className={styles.img}
          />
          <div className={styles.img_title}>
            Дипломы и сертификаты
          </div>
          <div className={styles.diplomas}>
            <figure onClick={handleOpen(first)}>
              <Image src={first} alt={'diploma'} width={70} height={50}/>
            </figure>
            <figure onClick={handleOpen(second)}>
              <Image src={second} alt={'diploma'} width={70} height={50}/>
            </figure>
            <figure onClick={handleOpen(third)}>
              <Image src={third} alt={'diploma'} width={70} height={50}/>
            </figure>
            <figure onClick={handleOpen(fourth)}>
              <Image src={fourth} alt={'diploma'} width={70} height={50}/>
            </figure>
          </div>
        </aside>

        <section className={styles.text_container}>
          <article className={styles.item}>
            <h2 className={styles.text_title}>Кто я?</h2>
            <p className={styles.desc}>
              Добрый день, дорогие друзья!
              Спасибо, что заглянули на личный сайт, и я надеюсь,
              что ВАМ здесь ПОНРАВИТСЯ.
              Давайте познакомимся!
              Меня зовут Василий Кушнерев, я профессиональный психолог, коуч,
              НЛП-мастер-тренер, который уже более 12-и лет оказывает
              психотерапевтическую помощь и услуги для мужчин
              и женщин, а также работает с различными проблемами в рамках
              Нейролингвистического Программирования
              <br/>
              <br/>
              Началом занятия психологией и саморазвитием является 2005 год,
              когда я начал обучение в программе подготовки
              гештальт-терапевтов МГИ
            </p>
          </article>
          <article className={styles.item}>
            <h3 className={styles.text_title}>Чем я занимаюсь?</h3>
            <p className={styles.desc}>
              В настоящее время веду терапевтические группы, Бизнес-тренинги,
              тренинги НЛП и личностного роста, провожу психологические очные
              и онлайн консультации (анонимно). Частный прием веду
              как дистанционно (удаленно), так и территориально — города Москва.
              <br/>
              В работе с клиентами использую глубокую научную основу,
              сочетающую простой прагматичный, индивидуальный подход.
            </p>
          </article>
          <article className={styles.item}>
            <h3 className={styles.text_title}>Немного об официальном
              образовании.</h3>
            <p className={styles.desc}>
              БГПУ им. М. Танка 2006 — 2011 Специальность
              «Психология семейных отношений. Семейный психолог»
              <br/>
              <br/>
              Московский Гештальт Институт (МГИ) 2005 — 2008 Теория и практика
              Гештальт-терапии
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
          </article>
        </section>
      </section>
    </div>
  );
};

export default About;
