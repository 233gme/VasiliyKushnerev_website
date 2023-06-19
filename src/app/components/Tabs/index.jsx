'use client';
import styles from './tabs.module.css';
import Image from 'next/image';
import ChevronDown from 'public/icons/chevron_down.svg';
import ChevronRight from 'public/icons/chevron_right.svg';
import { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [openTab, setOpenTab] = useState(0);
  const handelTabOpen = (item) => setOpenTab(item);

  return (
    <div className={styles.container}>
      {
        tabs.map(({ title, text }, index) => {
          return (
            <div className={styles.tab} key={title}>
              <div
                className={styles.title}
                onClick={() => handelTabOpen(index)}
              >
                <p>{title}</p>
                <span>
                  {
                    openTab === index
                      ? <Image src={ChevronDown} alt={'close'}/>
                      : <Image src={ChevronRight} alt={'open'}/>
                  }
                </span>
              </div>
              <div
                className={
                  openTab === index
                    ? styles.open_tab
                    : styles.close_tab
                }
              >
                <p className={styles.text}>
                  {text}
                </p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Tabs;
