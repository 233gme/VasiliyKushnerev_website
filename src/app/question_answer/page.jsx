'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loader from '@/app/components/Loader';

const QuestionAnswer = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return <Loader/>;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return (
      <div>QuestionAnswer</div>
    );
  }
};

export default QuestionAnswer;
