
import "./globals.css";
export default function Home() {
  useCheckUserLogin();
  return (
    <>
      <div className="HomeProfile"></div>
    </>
  );
}

// import { useSession } from 'next-auth/react';

// function HomePage() {
//   const { data: session } = useSession();

//   return (
//     <div>
//       {session ? (
//         <p>Welcome, {session.user.email}!</p>
//       ) : (
//         <p>Please sign in</p>
//       )}
//     </div>
//   );
// }

// export default HomePage;
