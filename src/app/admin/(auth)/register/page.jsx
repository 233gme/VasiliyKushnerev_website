'use client';
import React, { useState } from 'react';
import styles from './register.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Form from '@/app/components/shared/ui/Form';

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201
      && router.push('/admin/login?success=Ваша учетная запись создана!');
    } catch (err) {
      setError(err);
      console.log('REGISTER', err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>☝️Создайте учетную запись</h1>
      <h2 className={styles.subtitle}>Пожалуйста, зарегистрируйтесь.</h2>
      <Form
        handelSubmit={handleSubmit}
        password={true}
        title={'Создать аккаунт'}
        error={error}
      />
      <span className={styles.or}>- ИЛИ -</span>
      <Link className={styles.link} href="/admin/login">
        Войдите в свой аккаунт
      </Link>
    </div>
  );
};

export default Register;
