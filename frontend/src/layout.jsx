import { Outlet ,ScrollRestoration } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">


      <ScrollRestoration />
      {/* Top Header Navigation */}
      <Header />

      {/* Dynamic page content renders here */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Bottom Footer */} 
      <Footer />
    </div>
  );
};

export default Layout;