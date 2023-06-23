'use client';
import React, { useState } from 'react';
import styles from './register.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Form from 'src/app/components/shared/ui/Form';

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

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
      && router.push('/question_answer/login?success=Ваша учетная запись создана!');
    } catch (err) {
      setError(err);
      console.log(err);
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
      <Link className={styles.link} href="/dashboard/login">
        Войдите в свой аккаунт
      </Link>
    </div>
  );
};

export default Register;
