'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/home');
    }, 2000);
  };

  return (
    <div className='flex items-center justify-center min-h-screen w-full bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-2xl font-semibold text-gray-700 text-center'>
          Login
        </h2>
        <form className='mt-6'>
          <div>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
              placeholder='Enter your email'
            />
          </div>
          <div className='mt-4'>
            <label className='block text-gray-700'>Password</label>
            <input
              type='password'
              className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='button'
            className={`w-full px-4 py-2 mt-6 text-white rounded-md transition ${
              loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-700'
            }`}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
