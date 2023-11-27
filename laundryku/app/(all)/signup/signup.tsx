"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const router = useRouter();
  const [payload, setPayload] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSignUp = () => {
    if (payload.nama === "" || payload.email === "" || payload.password === "" || payload.confirmPassword === "") {
      window.alert("Form tidak boleh kosong");
    } else if (payload.password !== payload.confirmPassword) {
      setPasswordError("Password and Confirm Password do not match");
      setEmailError("");
    } else if (!isValidEmail(payload.email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setPasswordError("");
      setEmailError("");
      console.log(3)
      console.log("payload", payload)
      fetch('/api/users/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      .then(res => {
        if (res.status === 200) {

        }
      })
    }
  }

  const isValidEmail = (email: string) => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <div className="mr-28 flex-grow flex justify-end">
        <Image
          className="flex-shrink-0"
          src="/laundry.svg"
          alt="signup"
          width={700}
          height={700}
          priority
        />
      </div>
      <div className='absolute h-screen bg-white w-1/2 rounded-r-[3rem]'>
        <div className="text-right">
          <div className="mt-8 mr-8 text-gray-600 text-[13px]">
            <h3 className='text-[14px] font-semibold'>Already have an account?
              <button
                type="button"
                className="ml-3 font-bold inline-block rounded-full border-2 border-[##999696] px-8 py-3 text-sm uppercase leading-normal text-[#7689E7] transition duration-150 ease-in-out hover:border-[#7689E7] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-[#7689E7] focus:border-[#7689E7] focus:text-[#7689E7] focus:outline-none focus:ring-0 active:border-[#7689E7] active:text-[#7689E7] dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                onClick={() => router.push("/signin")}
              >
                Sign In
              </button>
            </h3>
          </div>
        </div>
        <div className='ml-28 mt-6'>
          <div>
            <p className='text-[44px] font-bold'>Welcome to LaundryKu!</p>
            <p className='text-[24px] font-semibold text-[#928B8B]'>Register your account</p>
          </div>
          <div className="text-black flex flex-col gap-4 mt-6 mb-10">
            <div>
              <span className="my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Nama
              </span>
              <input
                type="nama"
                name="nama"
                className="w-4/6 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="Nama"
                onChange={(e) => setPayload({ ...payload, nama: e.target.value })}
              />
            </div>
            <div>
              <span className="my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="w-4/6 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="you@example.com"
                onChange={(e) => {
                  setPayload({ ...payload, email: e.target.value });
                  setEmailError("");
                }}
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>

            <div>
              <span className="my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Password
              </span>
              <input
                type="password"
                name="password"
                className="w-4/6 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="•••••••••"
                onChange={(e) => {
                  setPayload({ ...payload, password: e.target.value });
                  setPasswordError("");
                }}
              />
            </div>

            <div>
              <span className="my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Confirm Password
              </span>
              <input
                type="password"
                name="confirm-password"
                className="w-4/6 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="•••••••••"
                onChange={(e) => {
                  setPayload({ ...payload, confirmPassword: e.target.value });
                  setPasswordError("");
                }}
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
          </div>
          <button
            type="button"
            className="w-4/6 text-[20px] font-semibold text-white bg-[#7689E7] hover:bg-[#6272C1] focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-md px-5 py-3 text-center dark:bg-[#7689E7] dark:hover:bg-[#6272C1] dark:focus:ring-white"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <div className='flex items-center gap-4 w-4/6 my-6'>
            <div className='w-1/2 h-[1px] bg-[#595959]'></div>
            <p>or</p>
            <div className='w-1/2 h-[1px] bg-[#595959]'></div>
          </div>
          <button className='w-4/6 flex gap-2 items-center justify-center px-5 py-2 rounded-full border border-[#8C8585]'>
            <Image src="/logo-black/github.svg" width={36} height={36} alt="Github"></Image>
            <p className='font-bold text-[20px]'>Continue with Github</p>
          </button>
        </div>
      </div>
    </>
  );
}