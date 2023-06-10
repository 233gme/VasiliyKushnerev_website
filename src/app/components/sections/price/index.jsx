import styles from './price.module.css';

import { priceCards } from '@/app/components/lib/const/priceCard.data';
import PriceCard from '@/app/components/PriceCard';

const Price = () => {
  return (
    <section className={styles.container}>
      {
        priceCards.map(({ title, desc, price, promo }) => {
          return <PriceCard key={title} title={title} price={price} desc={desc} promo={promo}/>;
        })
      }
    </section>
  );
};

export default Price;
