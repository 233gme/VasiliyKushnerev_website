import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['cyrillic'],
});

export const metadata = {
  title: 'Консультации НЛП психолога в Москве',
  description: 'Консультации НЛП психолога в Москве | ' +
    'Официальный сайт Василия Кушнерева',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
