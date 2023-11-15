import './globals.css'
import { Poppins } from 'next/font/google'
import Provider from '@/lib/Provider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ModalContainer from '@/components/layout/ModalContainer'
import Sidebar from '@/components/layout/Sidebar'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Next.js E-commerce website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          <Header />

          <main>
            {children}
          </main>

          <Footer />

          <Sidebar />
          <ModalContainer />
        </Provider>
      </body>
    </html>
  )
}
