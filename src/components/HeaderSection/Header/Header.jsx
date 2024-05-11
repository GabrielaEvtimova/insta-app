"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { signIn, useSession, signOut } from "next-auth/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import { HiCamera } from "react-icons/hi";

export default function Header() {
  const { data: session } = useSession();

  const [onUpload, setOnUpload] = useState(false);

  return (
    <div className="shadow border-b sticky top-0 bg-white dark:bg-black z-30 p-3  dark:border-neutral-700">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src="/Instagram-Logo.webp"
            width={96}
            height={96}
            alt="Instagram Logo"
            className="dark:hidden w-auto"
          />
          <Image
            src="/logo.png"
            width={96}
            height={96}
            alt="Instagram Logo"
            className="hidden dark:inline-flex w-auto"
          />
        </Link>
        <Link href="/" className="lg:hidden">
          <Image
            src="/logo.webp"
            width={40}
            height={40}
            alt="Instagram Logo"
            priority
          />
        </Link>

        <input
          type="text"
          placeholder="Search..."
          className="bg-neutral-50 outline-none border border-neutral-200 w-full rounded text-sm lg:text-[12pt] py-2 px-4 
           max-w-[180px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg
           dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder:text-neutral-500"
        />
        <div className="flex items-center gap-2 sm:gap-4">
          <DarkMode />
          {session ? (
            <>
              <IoMdAddCircleOutline
                className="text-xl sm:text-2xl cursor-pointer transform hover:scale-125 transition duration-300"
                onClick={() => setOnUpload(true)}
              />
              <img
                src={session.user.image}
                alt={session.user.name}
                className="rounded-full sm:w-10 sm:h-10 w-8 h-8 cursor-pointer transform hover:scale-110 transition duration-300"
                onClick={signOut}
              />
            </>
          ) : (
            <button
              className="text-sm lg:text-[12pt] font-semibold text-neutral-800 dark:text-white select-none"
              onClick={signIn}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
      {onUpload && (
        <Modal
          isOpen={onUpload}
          className="max-w-lg w-[90%] p-6 absolute top-56 right-[50%] translate-x-[50%] border-2 rounded-md shadow-md bg-white dark:bg-black outline-none"
          onRequestClose={() => setOnUpload(false)}
          ariaHideApp={false}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <HiCamera className="text-5xl text-neutral-400 dark:text-neutral-600 cursor-pointer" />
            <input
              type="text"
              maxLength="150"
              placeholder="Please enter your caption..."
              className="m-4 border-none text-center w-full focus:outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500 dark:bg-black"
            />
            <button
              // disabled
              className="w-full m-6 p-2 rounded-lg shadow-md
              bg-violet-300 text-neutral-900
              dark:bg-violet-700 dark:text-neutral-100
              disabled:bg-neutral-100 disabled:text-neutral-600
              dark:disabled:bg-neutral-800 dark:disabled:text-neutral-200
              hover:brightness-95 dark:hover:brightness-125 
              disabled:cursor-not-allowed disabled:hover:brightness-100 dark:disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
          <AiOutlineClose
            className="cursor-pointer absolute top-2 right-2 transform hover:scale-125 transition duration-300"
            onClick={() => setOnUpload(false)}
          />
        </Modal>
      )}
    </div>
  );
}
