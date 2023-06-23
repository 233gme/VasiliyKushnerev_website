'use client';
import styles from './admin.module.css';
import { useSession } from 'next-auth/react';
import Loader from 'src/app/components/shared/ui/Loader';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return <Loader/>;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/question_answer/login');
  }

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

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
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
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input}/>
          <input type="text" placeholder="Desc" className={styles.input}/>
          <input type="text" placeholder="Image" className={styles.input}/>
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
