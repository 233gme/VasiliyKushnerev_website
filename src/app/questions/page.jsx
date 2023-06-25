'use client';
import styles from './questions.module.css';
import { useSession } from 'next-auth/react';
import Loader from 'src/app/components/shared/ui/Loader';
import { useRouter } from 'next/navigation';
import Button from 'src/app/components/shared/ui/Button';
import Form from 'src/app/components/shared/ui/Form';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return <Loader/>;
  }

  const signInHandler = () => {
    router.push('/questions/login');
  };

  // if (session.status === 'unauthenticated') {
  //   router?.push('/questions/login');
  // }

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const title = e.target[0].value;
    // const desc = e.target[1].value;
    // const img = e.target[2].value;
    // const content = e.target[3].value;
    //
    // try {
    //   await fetch('/api/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title,
    //       desc,
    //       img,
    //       content,
    //       username: session.data.user.name,
    //     }),
    //   });
    //   mutate();
    //   e.target.reset();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleDelete = async (id) => {
    // try {
    //   await fetch(`/api/posts/${id}`, {
    //     method: 'DELETE',
    //   });
    //   mutate();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className={styles.container}>
      {/*Вопрос Психологу Онлайн*/}
      <div className={styles.posts}>
        {/*{isLoading*/}
        {/*  ? 'loading'*/}
        {/*  : data?.map((postItem) => (*/}
        {/*    <div className={styles.postItem} key={postItem._id}>*/}
        {/*      <div className={styles.imgContainer}>*/}
        {/*        <Image src={postItem.img} alt="" width={200} height={100}/>*/}
        {/*      </div>*/}
        {/*      <h2 className={styles.postTitle}>{postItem.title}</h2>*/}
        {/*      <span*/}
        {/*        className={styles.delete}*/}
        {/*        onClick={() => handleDelete(postItem._id)}*/}
        {/*      >*/}
        {/*        X*/}
        {/*      </span>*/}
        {/*    </div>*/}
        {/*  ))}*/}
      </div>
      {
        session.status === 'authenticated' ? (
          <Form
            title={'Отправить'}
            handleSubmit={handleSubmit}
            custom={'Тема'}
            name={false}
            email={false}
            text={true}
          />
        ) : (
          <Button
            title={'Войдите чтобы задать вопрос'}
            handler={signInHandler}
          />
        )
      }
    </div>
  );
};

export default Dashboard;
