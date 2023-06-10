import styles from './page.module.css';

import { Banner, Description, HowItWorks, Practice, Price, Steps } from '@/app/components/sections';


export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Banner/>
      <Practice/>
      <Description/>
      <HowItWorks/>
      <Steps/>
      <Price/>
    </main>
  );
}
