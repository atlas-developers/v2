import "./globals.css";

export const metadata = {
  title: "Atlas V2",
  description:
    "Official website for Atlas, publish your programs, download cheats, claim your rewards, send gifts and all that jazz!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
