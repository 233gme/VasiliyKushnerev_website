import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

const Button = ({ text, url, type = 'primary' }) => {
  return (
    <Link href={url}>
      <button className={styles[type]}>{text}</button>
    </Link>
  );
};

export default Button;
