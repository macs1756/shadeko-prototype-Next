import { Footer } from '@/Components/Footer'
import Header from '@/Components/Header'
import type { Metadata } from 'next'
import { Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='h-full flex flex-col min-h-[100vh]'>
      <Header />
      <main className='flex-1 flex items-center'>
        {children}
      </main>  
      <Footer />
      </body>
    </html>
  );
}
