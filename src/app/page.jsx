import styles from './page.module.css';
import { Suspense } from 'react';
import Loader from '@/app/components/Loader';
import {
  Banner,
  Description,
  HowItWorks,
  Practice,
  Price,
  Questions,
  Steps
} from '@/app/components/sections';


export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Suspense fallback={<Loader/>}>
        <Banner/>
        <Practice/>
        <Description/>
        <HowItWorks/>
        <Steps/>
        <Price/>
        <Questions/>
      </Suspense>
    </main>
  );
}
