import styles from './technique.module.css';
import { techniquesItem } from './data.js';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Button from 'src/app/components/shared/ui/LinkButton';

const getData = (tec) => {
  const data = techniquesItem[tec];
  if (data) {
    return data;
  }
  return notFound();
};

const Technique = ({ params }) => {
  const data = getData(params.technique);

  return (
    <div className={styles.container}>
      <span className={styles.subtitle}>Основные техники НЛП</span>
      <article>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.text}>
          {data.text.map((item, index) => (<p key={index}>{item}</p>))}
        </div>
        <div className={styles.desc}>
          {data.desc.map((item, index) => {
            if (item.type === 'section') {
              return (
                <div
                  className={styles.desc_item}
                  key={`${index}_${item.title}`}
                >
                  <p>
                    <span>{index + 1}. </span>
                    <span>{item.title} </span>
                    {item.text}
                  </p>
                  {
                    item?.img ? (
                      <div className={styles.desc_item_img}>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={358}
                          height={403}
                        />
                      </div>
                    ) : null
                  }
                </div>
              );
            } else if (item.type === 'title') {
              return (
                <h3
                  className={styles.desc_subtitle}
                  key={`${index}_${item.title}`}
                >
                  {item.title}
                </h3>
              );
            }
          })}
          <div className={styles.footer}>
            <p>{data.footer}</p>
          </div>
        </div>
        <div className={styles.footer_btn}>
          <Button url={'/techniques/'} text={'👈 вернуться к другим техникам'}/>
        </div>
      </article>
    </div>
  );
};

export default Technique;
