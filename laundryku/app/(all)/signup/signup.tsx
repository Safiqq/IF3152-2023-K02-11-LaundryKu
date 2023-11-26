"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const router = useRouter();
  return (
    <>
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
      <div className='absolute h-screen bg-white w-1/2 rounded-r-[5rem]'>
        <div className="text-right">
          <div className="mt-8 mr-8 text-gray-600 text-[13px]">
            <h3>Already have an account?
              <button
                type="button"
                className="ml-3 inline-block rounded-full border-2 border-[##999696] px-6 pb-[8px] pt-2 text-sm font-medium uppercase leading-normal text-[#7689E7] transition duration-150 ease-in-out hover:border-[#7689E7] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-[#7689E7] focus:border-[#7689E7] focus:text-[#7689E7] focus:outline-none focus:ring-0 active:border-[#7689E7] active:text-[#7689E7] dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                onClick={() => router.push("/signin")}
              >
                Sign In
              </button>
            </h3>
          </div>
        </div>
        <div className='ml-12 mt-24'>
          <div>
            <h1>Welcome to LaundryKu!</h1>
            <h4>Register your account</h4>
          </div>
          <div className="text-black flex flex-col gap-4 mt-6 mb-10">
            <div>
              <span className="my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Username
              </span>
              <input
                type="username"
                name="username"
                className="w-3/5 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="Username" />
            </div>

            <div>
              <span className="my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="w-3/5 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="you@example.com" />
            </div>

            <div>
              <span className="my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Password
              </span>
              <input
                type="password"
                name="password"
                className="w-3/5 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="•••••••••" />
            </div>

            <div>
              <span className="my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Confirm Password
              </span>
              <input
                type="confirm-password"
                name="confirm-password"
                className="w-3/5 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="•••••••••" />
            </div>
          </div>
          <button
            type="button"
            className="w-3/5 text-white bg-[#7689E7] hover:bg-[#6272C1] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-3 text-center dark:bg-[#7689E7] dark:hover:bg-[#6272C1] dark:focus:ring-white"
          >
            Sign Up
          </button>
          <div className='flex items-center gap-4 w-3/5 my-6'>
            <div className='w-1/2 h-[1px] bg-[#595959]'></div>
            <p>or</p>
            <div className='w-1/2 h-[1px] bg-[#595959]'></div>
          </div>
          <button className='w-3/5 flex gap-2 items-center justify-center px-5 py-2 rounded-full border border-[#8C8585]'>
            <Image src="/logo-black/github.svg" width={36} height={36} alt="Github"></Image>
            <p className='font-bold'>Continue with Github</p>
          </button>
        </div>
      </div>
    </>
  );
}
