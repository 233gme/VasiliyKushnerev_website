import styles from './form.module.css';
import Link from 'next/link';
import React from 'react';

const Form = ({
  handelSubmit,
  title = 'Записаться',
  error = null,
  privacy = true,
  password = false,
  name = true
}) => {
  return (
    <form
      onSubmit={handelSubmit}
      className={styles.form}
    >
      {
        name ? (
          <input
            type="text"
            placeholder="Ваше имя:"
            required
            className={styles.input}
          />
        ) : null
      }
      <input
        type="text"
        placeholder="Ваш e-mail:"
        required
        className={styles.input}
      />
      {
        password ? (
          <input
            type="password"
            placeholder="Пароль"
            required={password}
            className={styles.input}
          />
        ) : null
      }
      <button className={styles.button}>
        {title}
      </button>
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
