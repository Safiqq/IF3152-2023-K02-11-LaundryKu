"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { cookies } from 'next/headers'
import cookieCutter from 'cookie-cutter'

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const payload = {
      email: (form.email as HTMLInputElement).value,
      password: (form.password as HTMLInputElement).value
    };

    if (payload.email === "" && payload.password === "") {
      window.alert("Form tidak boleh kosong");
      setLoading(false);
    } else {
      fetch(`/api/users/${payload.email}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            if (payload.password === res.data.password) {
              cookieCutter.set('session-token', JSON.stringify(res.data))
              if (res.data.tipe === "Pegawai") {
                router.push("/laundry");
              } else if (res.data.tipe === "Pelanggan") {
                router.push("/katalog/pakaian");
              }
            } else {
              setLoading(false);
              window.alert("Email atau password salah");

            }
          } else {
            setLoading(false);
            window.alert("Email atau password salah");
          }
        });
    }
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
      <div className="absolute h-screen bg-white w-1/2 rounded-r-[3rem]">
        <div className="text-right">
          <div className="mt-8 mr-8 text-gray-600 text-[13px]">
            <h3 className="text-[14px] font-semibold">
              Don&apos;t have any account?
              <button
                type="button"
                className="ml-3 font-bold inline-block rounded-full border-2 border-[##999696] px-8 py-3 text-sm uppercase leading-normal text-[#7689E7] transition duration-150 ease-in-out hover:border-[#7689E7] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-[#7689E7] focus:border-[#7689E7] focus:text-[#7689E7] focus:outline-none focus:ring-0 active:border-[#7689E7] active:text-[#7689E7] dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </button>
            </h3>
          </div>
        </div>
        <div className="ml-28 mt-32">
          <div>
            <p className="text-[44px] font-bold">Welcome Back!</p>
            <p className="text-[24px] font-semibold text-[#928B8B]">
              Sign in to your account
            </p>
          </div>
          <form className=" flex flex-col gap-4 mt-6" onSubmit={handleSignIn}>
            <div>
              <span className="text-[20px] my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="w-4/6 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <span className="text-[20px] my-1 after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-bold text-slate-800">
                Password
              </span>
              <input
                type="password"
                name="password"
                className="w-4/6 px-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-lg text-md sm:text-md focus:ring-1"
                placeholder="•••••••••"
              />
            </div>
            <button
              className="mt-4 w-4/6 text-[20px] font-semibold text-white bg-[#7689E7] hover:bg-[#6272C1] focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-md px-5 py-3 text-center dark:bg-[#7689E7] dark:hover:bg-[#6272C1] dark:focus:ring-white"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center gap-4 w-4/6 my-6">
            <div className="w-1/2 h-[1px] bg-[#595959]"></div>
            <p>or</p>
            <div className="w-1/2 h-[1px] bg-[#595959]"></div>
          </div>
          <button
            className="w-4/6 flex gap-2 items-center justify-center px-5 py-2 rounded-full border border-[#8C8585]"
            onClick={() => router.push("api/auth/signin")}
          >
            <Image
              src="/logo-black/github.svg"
              width={36}
              height={36}
              alt="Github"
            ></Image>
            <p className="font-bold text-[20px]">Continue with Github</p>
          </button>
        </div>
      </div>
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <Image
            src="/spinner-fixgol.gif"
            alt="spinner"
            width={700}
            height={700}
          />
        </div>
      )}
    </>
  );
}
