'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { links } from '@/app/components/shared/lib/const/navbar.data';
import DarkModeToggle from 'src/app/components/shared/lib/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const session = useSession();
  const [showLogin, setShowLogin] = useState(true);

  const signOutHandler = () => signOut();

  const signInHandler = () => {
    router.push('/questions/login');
  };

  useEffect(() => {
    if (path) {
      if (path === '/questions/login' || path === '/questions/register') {
        setShowLogin(false);
      } else {
        setShowLogin(true);
      }
    }
  }, [path]);

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
          showLogin ? (
            session.status === 'authenticated' ? (
              <button
                className={styles.logout}
                onClick={signOutHandler}
              >
                Выйти
              </button>
            ) : (
              <button
                className={styles.logout}
                onClick={signInHandler}
              >
                Войти
              </button>
            )
          ) : null
        }
      </div>
    </div>
  );
};

export default Navbar;
