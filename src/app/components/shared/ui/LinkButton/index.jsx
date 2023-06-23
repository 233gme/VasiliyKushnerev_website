import React from 'react';
import styles from './linkButton.module.css';
import Link from 'next/link';

const LinkButton = ({ text, url, type = 'primary' }) => {
  return (
    <Link href={url}>
      <button className={styles[type]}>{text}</button>
    </Link>
  );
};

export default LinkButton;
