// src/components/Layout.tsx
import { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from '../components/Footer'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 antialiased">
    <NavBar />
    <main className="flex-grow container mx-auto px-4">{children}</main>
    <Footer />
  </div>
);

export default Layout;