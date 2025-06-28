import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container mx-auto px-8">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-900 mt-10">
        Made with 💗 by Khan
      </div>
    </div>
  );
}

export default AppLayout