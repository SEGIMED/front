import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },

      //? Pruebas -->
      async authorize(credentials) {
        try {
          const res = await fetch('http://localhost:4000/users');
          const users = await res.json();

          const user = users.find(
            (user: {
              id: number;
              email: string | undefined;
              password: string | undefined;
              name: string;
            }) =>
              user.email === credentials?.email &&
              user.password === credentials?.password
          );

          if (!user) {
            throw new Error('Credenciales inválidas');
          }

          const token = user.id.toString();

          return { ...user, token };
        } catch (error) {
          throw new Error('Credenciales inválidas');
        }
      }

      /*  async authorize(credentials) {
        try {
          const res = await fetch(`http://localhost:4000/users`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' }
          });

          if (!res.ok) {
            throw new Error('Fallo al autenticarse');
          }

          const user = await res.json();
          if (!user) {
            throw new Error('No se recibieron datos de usuario');
          }
          return user;
        } catch (error) {
          throw new Error('Credenciales inválidas');
        }
      } */
    })
  ]
  /*   session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.JWT_SECRET!
  } */
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
