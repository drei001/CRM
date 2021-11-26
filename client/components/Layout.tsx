import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex max-h-20">
      <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-12 fixed w-full z-20 top-0">
        <Navbar />
      </nav>
      <aside>
        <Sidebar />
      </aside>
      <main className="flex-1 m-20">{children}</main>
    </div>
  );
};

export default Layout;
