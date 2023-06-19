import styles from './form.module.css';
import Link from 'next/link';

const Form = () => {
  return (
    <form
      // onSubmit={handelSubmit}
      className={styles.form}
    >
      <input
        type="text"
        placeholder="Ваше имя:"
        required
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Ваш e-mail:"
        required
        className={styles.input}
      />
      <button className={styles.button}>
        Записаться
      </button>
      <span className={styles.privacy}>
        Нажимая на кнопку, вы соглашаетесь с политикой
        <Link href={'/privacy_policy'} className={styles.privacy_link}>
          {` ${'конфиденциальности'}`}
        </Link>
      </span>
    </form>
  );
};

export default Form;
