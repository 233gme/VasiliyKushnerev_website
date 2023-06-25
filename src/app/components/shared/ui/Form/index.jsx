import styles from './form.module.css';
import Link from 'next/link';
import React from 'react';
import Button from '@/app/components/shared/ui/Button';

const Form = ({
  handelSubmit,
  title = 'Записаться',
  error = null,
  privacy = true,
  password = false,
  name = true,
  email = true,
  custom = null,
  text = false
}) => {

  const formSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.username?.value,
      email: event.target.email?.value,
      custom: event.target['custom']?.value,
      password: event.target.password?.value,
      text: event.target['text']?.value
    };

    handelSubmit(formData);
  };

  return (
    <form
      onSubmit={formSubmit}
      className={styles.form}
    >
      {
        name ? (
          <input
            type="text"
            placeholder="Ваше имя:"
            name={'username'}
            required
            className={styles.input}
          />
        ) : null
      }
      {
        email ? (
          <input
            type="email"
            placeholder="Ваш e-mail:"
            name={'email'}
            required
            className={styles.input}
          />
        ) : null
      }
      {
        custom ? (
          <input
            type="text"
            placeholder={custom}
            name={'custom'}
            required
            className={styles.input}
          />
        ) : null
      }
      {
        password ? (
          <input
            type="password"
            placeholder="Пароль"
            name={'password'}
            required={password}
            className={styles.input}
          />
        ) : null
      }
      {
        text ? (
          <textarea
            className={styles.input}
            placeholder="Сообщение"
            name={'text'}
            cols="30"
            rows="10"
          >
          </textarea>
        ) : null
      }
      <Button style={styles.button} title={title} handler={handelSubmit}/>
      {error ? error : null}
      {
        privacy ? (
          <span className={styles.privacy}>
            Нажимая на кнопку, вы соглашаетесь с политикой
            <Link href={'/privacy_policy'} className={styles.privacy_link}>
              {` ${'конфиденциальности'}`}
            </Link>
          </span>
        ) : null
      }
    </form>
  );
};

export default Form;
