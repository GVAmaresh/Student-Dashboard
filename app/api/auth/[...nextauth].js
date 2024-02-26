import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbB6uytfn5LH2aIEnppFiQhH3YJvU72Zg",
  authDomain: "student-dashboard-98834.firebaseapp.com",
  projectId: "student-dashboard-98834",
  storageBucket: "student-dashboard-98834.appspot.com",
  messagingSenderId: "313171990350",
  appId: "1:313171990350:web:44df97272ff146c3c3701f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const userCredentials = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );

          if (userCredentials && userCredentials.user) {
            const userId = userCredentials.user.uid;
            const userToken = userId;

            return Promise.resolve({
              id: userId,
              email: credentials.email,
              token: userToken,
            });
          }

          return Promise.resolve(null);
        } catch (error) {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
