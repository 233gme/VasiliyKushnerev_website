import styles from './priceCard.module.css';
import Button from '@/app/components/shared/ui/LinkButton';

const PriceCard = ({ title, desc, price, promo }) => {
  return (
    <div className={styles.container}>
      {
        promo ? (
          <div className={styles.promo}>ХИТ</div>
        ) : null
      }
      <p className={styles.title}>{title}</p>
      <div className={styles.desc}>
        {
          desc.map(item => (
            <p key={item} className={styles.item}>{item}</p>
          ))
        }
      </div>
      <span className={styles.price}>{price}</span>
      <span className={styles.btn}>
        <Button text={'Записаться'} url={'/contact'} type={'secondary'}/>
      </span>
    </div>
  );
};

export default PriceCard;
