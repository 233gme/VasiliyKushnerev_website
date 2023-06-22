import React from 'react';
import styles from './blog.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export const metadata = {
  title: 'Блог - Официальный сайт Василия Кушнерева',
  description: 'Личный сайт Василия Кушнерева. ' +
    'Провожу онлайн консультации дистанционно и в городе Москва. ' +
    'Если нужен частный, профессиональный, взрослый НЛП психолог, ' +
    'первая консультация бесплатно'
};

const Blog = async () => {
  const data = await getData();

  return (
    <section className={styles.mainContainer}>
      {data.map(({ title, desc, img, _id }) => (
        <Link
          href={`/blog/${_id}`}
          className={styles.container}
          key={_id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{desc}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Blog;
