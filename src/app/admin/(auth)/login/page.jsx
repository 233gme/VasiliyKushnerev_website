'use client';
import React, { useEffect, useState } from 'react';
import styles from './login.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Loader from '@/app/components/shared/ui/Loader';
import Form from '@/app/components/shared/ui/Form';

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setError(params.get('error'));
    setSuccess(params.get('success'));
  }, [params]);

  if (session.status === 'loading') {
    return <Loader/>;
  }

  if (session.status === 'authenticated') {
    router?.push('/admin');
  }

  const singInGoogle = () => signIn('google');
  const singInCredentials = (data) => {
    const email = data.email;
    const password = data.password;
    
    return signIn('credentials', {
      email,
      password,
    });
  };


  return (
    <div className={styles.container}>
      <h1
        className={styles.title}>
        {
          error
            ? '🤷‍♂️ Пользователь не найден!'
            : success
              ? success
              : '👋 Здравствуйте!'
        }
      </h1>
      <h2 className={styles.subtitle}>Пожалуйста, войдите.</h2>
      <Form
        privacy={false}
        handelSubmit={singInCredentials}
        title={'Войти'}
        error={error}
        name={false}
        password={true}
      />
      <button
        onClick={singInGoogle}
        className={styles.google}
      >
        Войти с Google
      </button>
      <span className={styles.or}>- ИЛИ -</span>
      <Link className={styles.link} href="/admin/register">
        Создайте аккаунт
      </Link>
    </div>
  );
};

export default Login;
