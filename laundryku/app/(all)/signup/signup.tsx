"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const isClient = typeof window !== 'undefined';
  const router = isClient ? useRouter() : null;

  const handleSignIn = () => {
    if (isClient && router) {
      // Only use router.push on the client side
      router.push('/signin');
    }
  };
  return (
    <main className="flex min-w-screen min-h-screen bg-[#7689E7]">
      <div className="mr-5 flex-grow flex justify-end">
        <Image
          className="flex-shrink-0"
          src="/laundry.svg"
          alt="signup"
          width={800}
          height={800}
          priority
        />
      </div>
      <div className='absolute h-screen bg-white w-1/2 rounded-r-3xl'>
        <div className="text-right">
          <div className="mt-8 mr-8 text-gray-600 text-[13px]">
            <h3>Already have an account?
              <button
                type="button"
                className="ml-3 inline-block rounded-full border-2 border-[##999696] px-6 pb-[8px] pt-2 text-sm font-medium uppercase leading-normal text-[#7689E7] transition duration-150 ease-in-out hover:border-[#7689E7] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-[#7689E7] focus:border-[#7689E7] focus:text-[#7689E7] focus:outline-none focus:ring-0 active:border-[#7689E7] active:text-[#7689E7] dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                onClick={handleSignIn}
              >Sign In
              </button>
            </h3>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="items-center">
            <div className="ml-12 mt-8 text-black">
              <h1>Welcome to LaundryKu!</h1>
            </div>
            <div className="px-12 mt-1">
              <h4>Register your account</h4>
            </div>
          </div>
          <div className="items-center">
            <div className="ml-12 mt-8 text-black">
              <div className="mb-6">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                      Username
                    </span>
                    <input
                      type="username"
                      name="username"
                      style={{ width: '500px' }}
                      className="mt-1 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg text-md sm:text-md focus:ring-1"
                      placeholder="Username" />
                  </label>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                      Email
                    </span>
                    <input
                      style={{ width: '500px' }}
                      type="email"
                      name="email"
                      className="mt-1 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg text-md sm:text-md focus:ring-1"
                      placeholder="you@example.com" />
                  </label>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                      Password
                    </span>
                    <input
                      style={{ width: '500px' }}
                      type="password"
                      name="password"
                      className="mt-1 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg text-md sm:text-md focus:ring-1"
                      placeholder="•••••••••" />
                  </label>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                      Confirm Password
                    </span>
                    <input
                      style={{ width: '500px' }}
                      type="confirm-password"
                      name="confirm-password"
                      className="mt-1 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg text-md sm:text-md focus:ring-1"
                      placeholder="•••••••••" />
                  </label>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <button
                    type="button"
                    style={{ width: '500px' }}
                    className="mt-3 text-white bg-[#7689E7] hover:bg-[#6272C1] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-3 text-center me-2 mb-2 dark:bg-[#7689E7] dark:hover:bg-[#6272C1] dark:focus:ring-white"
                  >
                    SIGN UP
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
