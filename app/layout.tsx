import '@/app/ui/global.css';
import HeroHeader from "@/app/ui/Header/HeroHeader";
import Footer from "@/app/ui/Footer/Footer";

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
        <Footer/>
      </body>
    </html>
  );
}
