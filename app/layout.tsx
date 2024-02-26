import Create from "./Create";


export const metadata = {
  title: "Student Dashboard",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{
  return (
    <html>
      <body>
        <Create>{children}</Create>
      </body>
    </html>
  );
}