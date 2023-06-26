import React from 'react';
import styles from './blog.module.css';
import Link from 'next/link';
import Image from 'next/image';
import userIcon from '/public/icons/user.svg';
import dateIcon from '/public/icons/date.svg';
import eyeIcon from '/public/icons/eye.svg';
import { formatDate } from '@/app/components/shared/lib/FormatDate';

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
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Блог</h1>
      <section>
        {data.map(({ title, desc, img, _id, user, createdAt, views }) => (
          <Link
            href={`/blog/${_id}`}
            className={styles.container}
            key={_id}
          >
            <div className={styles.imageContainer}>
              <Image
                src={img}
                alt={title}
                width={400}
                height={250}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.post_title}>{title}</h1>
              <p className={styles.post_desc}>{desc}</p>
              <p className={styles.post_user}>
                <Image src={userIcon} alt={user}/>
                {user}
              </p>
              <p className={styles.post_date}>
                <Image src={dateIcon} alt={createdAt}/>
                {formatDate(createdAt)}
              </p>
              <p className={styles.post_date}>
                <Image src={eyeIcon} alt={views}/>
                {views}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Blog;
