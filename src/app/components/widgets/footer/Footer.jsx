import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { footerData } from '@/app/components/shared/lib/const/footer.data';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2019 - 2023 Василий Кушнерев</div>
      <div className={styles.social}>
        {
          footerData.map(({ href, src, alt }) => {
            return (
              <Link key={href} href={href}>
                <Image src={src}
                  width={15}
                  height={15}
                  className={styles.icon}
                  alt={alt}/>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Footer;
