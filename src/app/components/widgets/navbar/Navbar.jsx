'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import { links } from '@/app/components/shared/lib/const/navbar.data';
import DarkModeToggle from 'src/app/components/shared/lib/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();
  const signOutHandler = () => signOut();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Василий Кушнерев
      </Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {
          session.status === 'authenticated' ? (
            <button
              className={styles.logout}
              onClick={signOutHandler}
            >
              Выйти
            </button>
          ) : null
        }
      </div>
    </div>
  );
};

export default Navbar;
