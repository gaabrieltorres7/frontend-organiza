import { Inter } from 'next/font/google'
import '../styles/globals.css'
import AuthProvider from '@/components/login-cadastro/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Organiza',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <AuthProvider>        
        <body className={inter.className}>         
          {children}</body>
      </AuthProvider>      
    </html>
  )
}
