import styles from './contacts.module.css';
import Button from '@/app/components/Button/Button';
import contact from 'public/images/contact.png';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Контакты - Официальный сайт Василия Кушнерева',
  description: 'Личный сайт Василия Кушнерева. ' +
    'Провожу онлайн консультации дистанционно и в городе Москва. ' +
    'Если нужен частный, профессиональный, взрослый НЛП психолог, ' +
    'первая консультация бесплатно'
};

const Contacts = () => {
  return (
    <div className={styles.container}>
      <span className={styles.subtitle}>Контакты</span>
      <h1 className={styles.title}>Давайте поддерживать связь</h1>
      <p className={styles.desc}>
        Вы можете оставить сообщение в скайпе - PSYHONLINE, телеграмме, или
        заполнить контактную форму и я свяжусь с вами в ближайшее время.
      </p>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <Image
            src={contact}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Ваше имя" className={styles.input}/>
          <input type="text" placeholder="Ваш email" className={styles.input}/>
          <textarea
            className={styles.text_area}
            placeholder="Сообщение"
            cols="30"
            rows="10"
          >
          </textarea>
          <Button url="#" text="Отправить"/>
        </form>
      </div>
      <div className={styles.contacts}>
        <div>
          <div className={styles.contact}>
            <span>Телефон: </span>
            <Link href={`tel:${+79296949011}`}>
              +7(929)694-90-11
            </Link>
          </div>
          <div className={styles.contact}>
            <span>E-Mail: </span>
            <Link href={'mailto:psyhonline@yandex.ru'}>
              psyhonline@yandex.ru
            </Link>
          </div>
          <div className={styles.contact}>
            <span>Адрес:</span> <span>101000, г. Москва, Малый Златоустинский
              переулок, 9/2 ст6</span>
          </div>
        </div>
        <div>
          <div className={styles.contact}>
            <span>Telegram: </span>
            <Link href={'t.me/@VasiliyKushnerev'}>
              @VasiliyKushnerev
            </Link>
          </div>
          <div className={styles.contact}>
            <span>Skype: </span>
            <Link href={'https://join.skype.com/invite/oR15Hse5JeF4'}>
              Psyhonline
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
