import styles from './questions.module.css';

import Tabs from 'src/app/components/shared/ui/Tabs';
import Image from 'next/image';
import {
  questionsTabs
} from '@/app/components/shared/lib/const/questionsTabs.data';
import SomeQuestions from '../../../../../../public/images/Voprosy_ques.png';

const Questions = () => {
  return (
    <section className={styles.container}>
      <span className={styles.subtitle}>А по подробней?</span>
      <h3 className={styles.title}>Остались вопросы</h3>
      <div className={styles.desc}>
        <Image src={SomeQuestions} alt={'Остались вопросы'}/>
        <Tabs tabs={questionsTabs}/>
      </div>
    </section>
  );
};

export default Questions;
