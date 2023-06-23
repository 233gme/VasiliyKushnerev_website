import styles from './button.module.css';

const Button = ({ title, handler, style }) => {
  return (
    <button
      className={style ? style : styles.button}
      onClick={handler}
    >
      {title}
    </button>
  );
};

export default Button;
