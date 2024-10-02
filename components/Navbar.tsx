'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false; // Replace with your authentication logic

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    // Optionally navigate after logout
    router.push('/login');
  };

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div
          className='text-white text-2xl font-bold cursor-pointer'
          onClick={() => router.push('/')}
        >
          Js Learner
        </div>
        <div className='hidden md:flex space-x-4'>
          <button
            onClick={() => router.push('/Home')}
            className='text-white hover:bg-gray-700 px-3 py-2 rounded'
          >
            Home
          </button>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className='text-white hover:bg-gray-700 px-3 py-2 rounded'
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push('/')}
              className='text-white hover:bg-gray-700 px-3 py-2 rounded'
            >
              Login
            </button>
          )}
        </div>
        <div className='md:hidden'>
          <button
            className='text-white focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-gray-700'>
          <button
            onClick={() => router.push('/')}
            className='block text-white hover:bg-gray-600 px-4 py-2'
          >
            Home
          </button>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className='block text-white hover:bg-gray-600 px-4 py-2'
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push('/login')}
              className='block text-white hover:bg-gray-600 px-4 py-2'
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
