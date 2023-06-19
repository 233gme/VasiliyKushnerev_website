'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import { links } from '@/app/components/lib/const/navbar.data';
// import { signOut, useSession } from 'next-auth/react';

const signOut = () => {
  console.log('hi');
};

const Navbar = () => {

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Василий Кушнерев
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {/*{session.status === 'authenticated' && (*/}
        {
          <button
            className={styles.logout}
            onClick={signOut}
          >
            Logout
          </button>
        }
      </div>
    </div>
  );
};

export default Navbar;
