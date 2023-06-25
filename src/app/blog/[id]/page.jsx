import React from 'react';
import styles from './post.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import userIcon from '/public/icons/user.svg';
import dateIcon from '/public/icons/date.svg';
import eyeIcon from '/public/icons/eye.svg';
import Button from '@/app/components/shared/ui/LinkButton';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}


export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const Post = async ({ params }) => {
  const {
    title,
    desc,
    img,
    text,
    user,
    date,
    views
  } = await getData(params.id);

  const postText = text.split('\n').filter(item => item.length);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>
            {desc}
          </p>
          <div className={styles.author_desc}>
            <div className={styles.author}>
              <Image
                src={userIcon}
                alt={user}
                className={styles.avatar}
              />
              <span>{user}</span>
            </div>
            <div className={styles.author}>
              <Image
                src={dateIcon}
                alt={date}
                className={styles.avatar}
              />
              <span>{date}</span>
            </div>
            <div className={styles.author}>
              <Image
                src={eyeIcon}
                alt={views}
                className={styles.avatar}
              />
              <span>{views}</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={img}
            alt={desc}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        {
          postText.map((item, index) => (
            <p key={index} className={styles.text}>{item}</p>))
        }
      </div>
      <div className={styles.footer_btn}>
        <Button url={'/blog/'} text={'👈 Вернуться к другим статьям'}/>
      </div>
    </div>
  );
};

export default Post;
