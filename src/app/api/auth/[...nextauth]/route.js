import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDb from '@/utils/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connectDb();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Проверьте пароль или email!');
            }

          } else {
            throw new Error('Проверьте email или пароль!');
          }

        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: '/admin/login',
  },

}
);

export { handler as GET, handler as POST };
