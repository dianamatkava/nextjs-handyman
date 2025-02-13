import '@/app/ui/global.css';
import HeroHeader from "@/app/ui/Header/HeroHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <HeroHeader/>
        {children}
      </body>
    </html>
  );
}
