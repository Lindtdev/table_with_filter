import "./globals.css";


export const metadata = {
  title: "Table filterS",
  description: "Filter the table",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
